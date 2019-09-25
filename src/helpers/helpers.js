export function Res(ok, message,token) {

  return {
    ok: ok,
    token: token,
    data: {
      message
    }
  };
}
