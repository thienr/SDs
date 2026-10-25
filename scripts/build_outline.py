#!/usr/bin/env python3
"""Emit src/data/outline.ts from the JSON heads plus session lines."""
import importlib.util
import json
from pathlib import Path

root = Path("/workspace")

def load(name):
    path = root / "scripts" / name
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod

sa = load("sessions_a.py")
load("sessions_b.py").add_more(sa.a)
load("sessions_c.py").add_c(sa.a)
(root / "scripts/outline_sessions.json").write_text(json.dumps(sa.S, ensure_ascii=False, indent=2))

courses = json.loads((root / "scripts/outline_courses.json").read_text())
modules = json.loads((root / "scripts/outline_modules.json").read_text())
sessions = json.loads((root / "scripts/outline_sessions.json").read_text())
catalog = json.loads((root / "src/data/course.json").read_text())

missing = []
for course in catalog["courses"]:
    if course["id"] not in courses:
        missing.append("course " + course["id"])
    for mod in course["modules"]:
        key = course["id"] + "||" + mod["title"]
        if key not in modules:
            missing.append("module " + key)
        for sess in mod["sessions"]:
            keys = [
                course["id"] + "||" + mod["title"] + "||" + sess["title"],
                course["id"] + "||" + sess["title"],
                sess["title"],
            ]
            if not any(k in sessions for k in keys):
                missing.append("session " + keys[0])
if missing:
    raise SystemExit("missing\n" + "\n".join(missing))

def j(obj):
    return json.dumps(obj, ensure_ascii=False, indent=2)

out = """import type { Lang } from "@/lib/progress";

export type Line = { vi: string; en: string };

export function pick(line: Line, lang: Lang) {
  return line[lang];
}

type Head = { why: Line; plain: Line; prior: Line };

const courses: Record<string, Head> = %s;

const modules: Record<string, Head> = %s;

const sessions: Record<string, Line> = %s;

export function courseHead(courseId: string): Head {
  return courses[courseId] ?? {
    why: { vi: "Phần này chưa có lời mở.", en: "This course has no opener yet." },
    plain: { vi: "Mục lục bên dưới vẫn là các phần của khóa.", en: "The contents below are still the parts of the course." },
    prior: { vi: "", en: "" },
  };
}

export function moduleHead(courseId: string, moduleTitle: string): Head {
  return modules[courseId + "||" + moduleTitle] ?? {
    why: { vi: "Đọc phần này trước khi mở từng buổi.", en: "Read this part before opening each session." },
    plain: { vi: moduleTitle, en: moduleTitle },
    prior: { vi: "Nối với phần ngay phía trên trong cùng khóa.", en: "It follows the part above it in the same course." },
  };
}

export function sessionHead(courseId: string, moduleTitle: string, sessionTitle: string): Line {
  return (
    sessions[courseId + "||" + moduleTitle + "||" + sessionTitle] ??
    sessions[courseId + "||" + sessionTitle] ??
    sessions[sessionTitle] ?? { vi: sessionTitle, en: sessionTitle }
  );
}
""" % (j(courses), j(modules), j(sessions))
(root / "src/data/outline.ts").write_text(out)
print("wrote", len(out))

