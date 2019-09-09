export function Res(ok, message) {
  return {
    ok: ok,
    err: {
      message: message
    }
  };
}
