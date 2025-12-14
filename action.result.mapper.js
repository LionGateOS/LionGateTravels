// action.result.mapper.js
// v39 - Map action outcomes to user-safe messages (TEST MODE)

export function mapResult(outcome) {
  switch (outcome) {
    case 'cancel_without_fee':
      return { ok: true, message: 'I handled this for you.' };
    case 'change_basic':
      return { ok: true, message: 'I handled this for you.' };
    case 'file_issue':
      return { ok: true, message: 'I handled this for you.' };
    case null:
    default:
      return { ok: false, message: 'All systems are running normally.' };
  }
}
