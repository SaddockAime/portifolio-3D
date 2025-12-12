# andasy.hcl app configuration file generated for saddock-portfolio-3d on Friday, 12-Dec-25 10:23:38 EET
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "saddock-portfolio-3d"

app {

  env = {}

  port = 3000

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "saddock-portfolio-3d"
  }

}
