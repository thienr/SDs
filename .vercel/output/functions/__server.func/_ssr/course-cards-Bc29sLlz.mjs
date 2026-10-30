import { g as sessionConcepts } from "./study-BtAMXX88.mjs";
import { r as courses } from "./catalog-DRaoKsF4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/course-cards-Bc29sLlz.js
/** Các thẻ khái niệm thật (bỏ thẻ «d-» sinh từ bài giảng) của một khóa, theo thứ tự mục lục. */
function courseCardIds(courseId) {
	const c = courses.find((x) => x.id === courseId);
	if (!c) return [];
	return c.modules.flatMap((m) => m.sessions.flatMap((s) => {
		var _sessionConcepts$s$id;
		return ((_sessionConcepts$s$id = sessionConcepts[s.id]) !== null && _sessionConcepts$s$id !== void 0 ? _sessionConcepts$s$id : []).filter((id) => !id.startsWith("d-"));
	}));
}
var allCardIds = () => courses.flatMap((c) => courseCardIds(c.id));
//#endregion
export { courseCardIds as n, allCardIds as t };
