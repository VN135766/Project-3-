// this module is used for server-side development

const { trusted } = require("mongoose")


  // testStatus = ""    // set testStatus to NULL when application is LIVE  
  testStatus = "testing"  
  //testStatus = null
  devToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJDYXJ0bWFuIiwiZW1haWwiOiJjQGdtYWlsLmNvbSIsIl9pZCI6IjYzMTQ5Y2ZjMjVmNTQ4YTU1ZWFkNjZlMCIsImlhdCI6MTY2MjI5NTM2MywiZXhwIjoxNjYzMDE1MzYzfQ.n47Rttx7m1mAUC3IO1yIvVNGK1zgjYhhwOQ5X2gu5cQ"
  // devToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJCZW4gRG92ZXIiLCJlbWFpbCI6ImJkQGdtYWlsLmNvbSIsIl9pZCI6IjYzMTQ5Y2ZjMjVmNTQ4YTU1ZWFkNjZkZSIsImlhdCI6MTY2MjMzMDYwNiwiZXhwIjoxNjYzMDUwNjA2fQ.wGSJtMZQEUxe9SqjUcLPYYEAIUyrfWKnc_UF35F7kB0"
  badToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfbmFtZSI6IlBldERldGVjdGl2ZSIsImVtYWlsIjoiZmF2QGdtYWlsLmNvbSIsIl9pZCI6IjYzMTM5NGNkOGU2NzJiNzU0ZjdhNjk0ZSJ9LCJpYXQiOjE2NjIyMzcxNjksImV4cCI6MTY2Mjk1NzE2OX0.aylPFticpkZS4LBZ__feowrsbzJ1GjnUY8fmi5pPrhA@@"

  
module.exports = { testStatus, devToken, badToken}