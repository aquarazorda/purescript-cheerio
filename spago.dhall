{ name = "cheerio"
, license = "MIT"
, repository = "https://github.com/icyrockcom/purescript-cheerio"
, dependencies =
  [ "arrays"
  , "effect"
  , "functions"
  , "maybe"
  , "prelude"
  , "test-unit"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
