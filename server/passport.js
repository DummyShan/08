const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport')

passport.use(new GoogleStrategy({
    clientID: "471990863825-l0p0s58t1h0ekgh06e2766iuluscurn0.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile)
  }
));

passport.use(new FacebookStrategy({
    clientID: '347724380722896',
    clientSecret: '67a9f0bcf3ca9466fdc6107467fc20b8',
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile)
  }
));

passport.serializeUser((user, cb) => cb(null, user))

passport.deserializeUser((user, cb) => cb(null, user))