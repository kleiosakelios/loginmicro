import { Router } from "express";
import passport from "passport";

const loginRouter = Router();

loginRouter.get(
  "/microsoft",
  passport.authenticate("auth-microsoft", {
    prompt: "select_account",
    session: false,
  })
);

loginRouter.get(
  "/microsoft/callback",
  passport.authenticate("auth-microsoft", {
    failureRedirect: "/auth/microsoft",
    session: false,
  }),
  (req, res) => {
    const userString = JSON.stringify(req.user)
    res.send(`<!DOCTYPE html>
    <html lang="en">
      <body>
      </body>
      <script>
        window.opener.postMessage(${userString}, 'http://localhost:5000')
      </script>
    </html>`)
  }
);

export { loginRouter };
