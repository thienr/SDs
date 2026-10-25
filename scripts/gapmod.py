"""Shared bucket for hand-written idea cards. Imported by the card files."""

CARDS = []


def K(
    id,
    course,
    sid,
    video,
    eyebrow,
    session,
    module,
    title,
    why,
    prior,
    a,
    b,
    na,
    nb,
    plain,
    situation,
    use,
    precise,
    insight,
    formula=None,
    symbols=(),
):
    """Each bilingual field is a (vi, en) pair. `use` is a list of pairs. symbols is (sym, vi, en)."""
    CARDS.append(
        {
            "id": id,
            "course": course,
            "sid": sid,
            "video": video,
            "eyebrow": eyebrow,
            "session": session,
            "module": module,
            "title": title,
            "why": why,
            "prior": prior,
            "a": a,
            "b": b,
            "na": na,
            "nb": nb,
            "plain": plain,
            "situation": situation,
            "use": use,
            "precise": precise,
            "insight": insight,
            "formula": formula,
            "symbols": symbols,
        }
    )
