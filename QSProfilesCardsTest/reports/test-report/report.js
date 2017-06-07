$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("userStory1.feature");
formatter.feature({
  "line": 1,
  "name": "User views the main informations about all members of the team (pedro, vítor and miriam)",
  "description": "As an user\r\nI want to see a list of the team members (pedro, vítor and miriam)\r\nSo that I can know the team better and see the main information",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "There are no members to show",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "doesn\u0027t exists \"\u003cmembers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the application shows a default message \"\u003cmsg\u003e\" to member \"\u003cmembers\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;",
  "rows": [
    {
      "cells": [
        "members",
        "msg"
      ],
      "line": 13,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "There are no members to show."
      ],
      "line": 14,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "There are no members to show."
      ],
      "line": 15,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "There are no members to show."
      ],
      "line": 16,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3629928524,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "There are no members to show",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "doesn\u0027t exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the application shows a default message \"There are no members to show.\" to member \"Miriam Pereira\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 412888708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 16
    }
  ],
  "location": "Stepdefs.doesnTExists(String)"
});
formatter.result({
  "duration": 1249488998,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 108789455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There are no members to show.",
      "offset": 41
    },
    {
      "val": "Miriam Pereira",
      "offset": 83
    }
  ],
  "location": "Stepdefs.theApplicationShowsADefaultMessageToMember(String,String)"
});
formatter.result({
  "duration": 321459824,
  "status": "passed"
});
formatter.after({
  "duration": 1921930,
  "status": "passed"
});
formatter.before({
  "duration": 355920063,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "There are no members to show",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "doesn\u0027t exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the application shows a default message \"There are no members to show.\" to member \"Vítor Dias\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 49047029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 16
    }
  ],
  "location": "Stepdefs.doesnTExists(String)"
});
formatter.result({
  "duration": 329756318,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 62451924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There are no members to show.",
      "offset": 41
    },
    {
      "val": "Vítor Dias",
      "offset": 83
    }
  ],
  "location": "Stepdefs.theApplicationShowsADefaultMessageToMember(String,String)"
});
formatter.result({
  "duration": 335189902,
  "status": "passed"
});
formatter.after({
  "duration": 994996,
  "status": "passed"
});
formatter.before({
  "duration": 15324125,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "There are no members to show",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "doesn\u0027t exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the application shows a default message \"There are no members to show.\" to member \"Pedro Jorge\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 54971630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 16
    }
  ],
  "location": "Stepdefs.doesnTExists(String)"
});
formatter.result({
  "duration": 292889615,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 52742343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There are no members to show.",
      "offset": 41
    },
    {
      "val": "Pedro Jorge",
      "offset": 83
    }
  ],
  "location": "Stepdefs.theApplicationShowsADefaultMessageToMember(String,String)"
});
formatter.result({
  "duration": 283329120,
  "status": "passed"
});
formatter.after({
  "duration": 2903422,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "exists \"\u003cmembers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the application shows member \"\u003cmembers\u003e\" name \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;",
  "rows": [
    {
      "cells": [
        "members",
        "name"
      ],
      "line": 25,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "Miriam Pereira"
      ],
      "line": 26,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "Vítor Dias"
      ],
      "line": 27,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "Pedro Jorge"
      ],
      "line": 28,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18857926,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the application shows member \"Miriam Pereira\" name \"Miriam Pereira\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 21382147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 31638383,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 43991564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 30
    },
    {
      "val": "Miriam Pereira",
      "offset": 52
    }
  ],
  "location": "Stepdefs.theApplicationShowsName(String,String)"
});
formatter.result({
  "duration": 248087793,
  "status": "passed"
});
formatter.after({
  "duration": 319781,
  "status": "passed"
});
formatter.before({
  "duration": 15005963,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the application shows member \"Vítor Dias\" name \"Vítor Dias\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 17394602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 26460840,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 38061022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 30
    },
    {
      "val": "Vítor Dias",
      "offset": 48
    }
  ],
  "location": "Stepdefs.theApplicationShowsName(String,String)"
});
formatter.result({
  "duration": 273054518,
  "status": "passed"
});
formatter.after({
  "duration": 354892,
  "status": "passed"
});
formatter.before({
  "duration": 20728540,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the application shows member \"Pedro Jorge\" name \"Pedro Jorge\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 14540336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 29065006,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 37137329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 30
    },
    {
      "val": "Pedro Jorge",
      "offset": 49
    }
  ],
  "location": "Stepdefs.theApplicationShowsName(String,String)"
});
formatter.result({
  "duration": 217046840,
  "status": "passed"
});
formatter.after({
  "duration": 355973,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "exists \"\u003cmembersId\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the application show \"\u003cdefault name\u003e\" to the \"\u003cmembersId\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;",
  "rows": [
    {
      "cells": [
        "membersId",
        "default name"
      ],
      "line": 37,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;1"
    },
    {
      "cells": [
        "speakerMiriam",
        "User"
      ],
      "line": 38,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;2"
    },
    {
      "cells": [
        "speakerVitor",
        "User"
      ],
      "line": 39,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;3"
    },
    {
      "cells": [
        "speakerPedro",
        "User"
      ],
      "line": 40,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8521745,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "exists \"speakerMiriam\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the application show \"User\" to the \"speakerMiriam\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 11818952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "speakerMiriam",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 23822643,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 28738203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 22
    },
    {
      "val": "speakerMiriam",
      "offset": 36
    }
  ],
  "location": "Stepdefs.theApplicationShowToThe(String,String)"
});
formatter.result({
  "duration": 215583515,
  "status": "passed"
});
formatter.after({
  "duration": 308978,
  "status": "passed"
});
formatter.before({
  "duration": 9717685,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "exists \"speakerVitor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the application show \"User\" to the \"speakerVitor\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 18615929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "speakerVitor",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 16474150,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 25524722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 22
    },
    {
      "val": "speakerVitor",
      "offset": 36
    }
  ],
  "location": "Stepdefs.theApplicationShowToThe(String,String)"
});
formatter.result({
  "duration": 226157911,
  "status": "passed"
});
formatter.after({
  "duration": 604992,
  "status": "passed"
});
formatter.before({
  "duration": 11192353,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "exists \"speakerPedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the application show \"User\" to the \"speakerPedro\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 30037855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "speakerPedro",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 14241621,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 22165936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 22
    },
    {
      "val": "speakerPedro",
      "offset": 36
    }
  ],
  "location": "Stepdefs.theApplicationShowToThe(String,String)"
});
formatter.result({
  "duration": 195395687,
  "status": "passed"
});
formatter.after({
  "duration": 301956,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "exists \"\u003cmembers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the application show \"\u003cmembers\u003e\" photo \"\u003cphoto\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;",
  "rows": [
    {
      "cells": [
        "members",
        "photo"
      ],
      "line": 49,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "img/miriam.jpg"
      ],
      "line": 50,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "img/vitor.jpg"
      ],
      "line": 51,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "img/pedro.jpg"
      ],
      "line": 52,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6866119,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the application show \"Miriam Pereira\" photo \"img/miriam.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 12545482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 13839193,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 21394572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 22
    },
    {
      "val": "img/miriam.jpg",
      "offset": 45
    }
  ],
  "location": "Stepdefs.theApplicationShowPhoto(String,String)"
});
formatter.result({
  "duration": 14862278,
  "status": "passed"
});
formatter.after({
  "duration": 375959,
  "status": "passed"
});
formatter.before({
  "duration": 9348208,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the application show \"Vítor Dias\" photo \"img/vitor.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 25271922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 18613228,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 37132467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 22
    },
    {
      "val": "img/vitor.jpg",
      "offset": 41
    }
  ],
  "location": "Stepdefs.theApplicationShowPhoto(String,String)"
});
formatter.result({
  "duration": 23994957,
  "status": "passed"
});
formatter.after({
  "duration": 367857,
  "status": "passed"
});
formatter.before({
  "duration": 8131741,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the application show \"Pedro Jorge\" photo \"img/pedro.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 8939838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 11032462,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 18262117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 22
    },
    {
      "val": "img/pedro.jpg",
      "offset": 42
    }
  ],
  "location": "Stepdefs.theApplicationShowPhoto(String,String)"
});
formatter.result({
  "duration": 23150129,
  "status": "passed"
});
formatter.after({
  "duration": 946920,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "exists \"\u003cmembers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the application show a \"\u003cmembers\u003e\" default photo \"\u003cdefault photo\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;",
  "rows": [
    {
      "cells": [
        "members",
        "default photo"
      ],
      "line": 61,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "img/default.jpg"
      ],
      "line": 62,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "img/default.jpg"
      ],
      "line": 63,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "img/default.jpg"
      ],
      "line": 64,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9257999,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the application show a \"Miriam Pereira\" default photo \"img/default.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 10470684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 15665513,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 24336346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 24
    },
    {
      "val": "img/default.jpg",
      "offset": 55
    }
  ],
  "location": "Stepdefs.theApplicationShowADefaultPhoto(String,String)"
});
formatter.result({
  "duration": 14107659,
  "status": "passed"
});
formatter.after({
  "duration": 728151,
  "status": "passed"
});
formatter.before({
  "duration": 14233519,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the application show a \"Vítor Dias\" default photo \"img/default.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 15265786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 20231042,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 37239421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 24
    },
    {
      "val": "img/default.jpg",
      "offset": 51
    }
  ],
  "location": "Stepdefs.theApplicationShowADefaultPhoto(String,String)"
});
formatter.result({
  "duration": 19029701,
  "status": "passed"
});
formatter.after({
  "duration": 653068,
  "status": "passed"
});
formatter.before({
  "duration": 15865376,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "the application show a \"Pedro Jorge\" default photo \"img/default.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 14358298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 17149904,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27608704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 24
    },
    {
      "val": "img/default.jpg",
      "offset": 52
    }
  ],
  "location": "Stepdefs.theApplicationShowADefaultPhoto(String,String)"
});
formatter.result({
  "duration": 18338281,
  "status": "passed"
});
formatter.after({
  "duration": 7513245,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 66,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "exists \"\u003cmembers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "the application show member \"\u003cmembers\u003e\" short bio \"\u003cshort bio\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;",
  "rows": [
    {
      "cells": [
        "members",
        "short bio"
      ],
      "line": 73,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "21 years old. Master\u0027s student. Front end developer."
      ],
      "line": 74,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "22 years old. Master\u0027s student. Front end developer."
      ],
      "line": 75,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "23 years old. Master\u0027s student."
      ],
      "line": 76,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10107688,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "the application show member \"Miriam Pereira\" short bio \"21 years old. Master\u0027s student. Front end developer.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 13397333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 19119369,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 34953956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 29
    },
    {
      "val": "21 years old. Master\u0027s student. Front end developer.",
      "offset": 56
    }
  ],
  "location": "Stepdefs.theApplicationShow(String,String)"
});
formatter.result({
  "duration": 264660794,
  "status": "passed"
});
formatter.after({
  "duration": 1251578,
  "status": "passed"
});
formatter.before({
  "duration": 10160085,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "the application show member \"Vítor Dias\" short bio \"22 years old. Master\u0027s student. Front end developer.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 9364413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 14337771,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 22473834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 29
    },
    {
      "val": "22 years old. Master\u0027s student. Front end developer.",
      "offset": 52
    }
  ],
  "location": "Stepdefs.theApplicationShow(String,String)"
});
formatter.result({
  "duration": 255675581,
  "status": "passed"
});
formatter.after({
  "duration": 889123,
  "status": "passed"
});
formatter.before({
  "duration": 14415015,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "the application show member \"Pedro Jorge\" short bio \"23 years old. Master\u0027s student.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 13216375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 15504002,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27476362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 29
    },
    {
      "val": "23 years old. Master\u0027s student.",
      "offset": 53
    }
  ],
  "location": "Stepdefs.theApplicationShow(String,String)"
});
formatter.result({
  "duration": 226862835,
  "status": "passed"
});
formatter.after({
  "duration": 289532,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 78,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "exists \"\u003cmembers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "the application show \"\u003cmembers\u003e\" short bio \"\u003cshortBioMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;",
  "rows": [
    {
      "cells": [
        "members",
        "shortBioMsg"
      ],
      "line": 85,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "The user don\u0027t have information."
      ],
      "line": 86,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "The user don\u0027t have information."
      ],
      "line": 87,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "The user don\u0027t have information."
      ],
      "line": 88,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7533771,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "the application show \"Miriam Pereira\" short bio \"The user don\u0027t have information.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 11780599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 16284550,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 30197746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 22
    },
    {
      "val": "The user don\u0027t have information.",
      "offset": 49
    }
  ],
  "location": "Stepdefs.theApplicationDonTShowShortBio(String,String)"
});
formatter.result({
  "duration": 228248375,
  "status": "passed"
});
formatter.after({
  "duration": 280349,
  "status": "passed"
});
formatter.before({
  "duration": 7737956,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "the application show \"Vítor Dias\" short bio \"The user don\u0027t have information.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 8788050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 13388150,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 20631849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 22
    },
    {
      "val": "The user don\u0027t have information.",
      "offset": 45
    }
  ],
  "location": "Stepdefs.theApplicationDonTShowShortBio(String,String)"
});
formatter.result({
  "duration": 202046817,
  "status": "passed"
});
formatter.after({
  "duration": 305197,
  "status": "passed"
});
formatter.before({
  "duration": 6411295,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "the application show \"Pedro Jorge\" short bio \"The user don\u0027t have information.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 8674613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 23084228,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 26888655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 22
    },
    {
      "val": "The user don\u0027t have information.",
      "offset": 46
    }
  ],
  "location": "Stepdefs.theApplicationDonTShowShortBio(String,String)"
});
formatter.result({
  "duration": 245431769,
  "status": "passed"
});
formatter.after({
  "duration": 1043072,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 90,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 91,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "exists \"\u003cmembers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "the application show facebook icon with member \"\u003cmembers\u003e\" link \"\u003cfacebook link\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 96,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;",
  "rows": [
    {
      "cells": [
        "members",
        "facebook link"
      ],
      "line": 97,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "https://www.facebook.com/miriampereira95"
      ],
      "line": 98,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "https://www.facebook.com/vitor.dias.3954"
      ],
      "line": 99,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "https://www.facebook.com/pedrombjorge"
      ],
      "line": 100,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10929289,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 91,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "the application show facebook icon with member \"Miriam Pereira\" link \"https://www.facebook.com/miriampereira95\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 11409502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 14328589,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27584937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 48
    },
    {
      "val": "https://www.facebook.com/miriampereira95",
      "offset": 70
    }
  ],
  "location": "Stepdefs.theApplicationShowFacebookIconWith(String,String)"
});
formatter.result({
  "duration": 15038914,
  "status": "passed"
});
formatter.after({
  "duration": 734093,
  "status": "passed"
});
formatter.before({
  "duration": 10908222,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 91,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "the application show facebook icon with member \"Vítor Dias\" link \"https://www.facebook.com/vitor.dias.3954\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 16305616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 32830542,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 25029386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 48
    },
    {
      "val": "https://www.facebook.com/vitor.dias.3954",
      "offset": 66
    }
  ],
  "location": "Stepdefs.theApplicationShowFacebookIconWith(String,String)"
});
formatter.result({
  "duration": 16904127,
  "status": "passed"
});
formatter.after({
  "duration": 1236453,
  "status": "passed"
});
formatter.before({
  "duration": 16831743,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 91,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "the application show facebook icon with member \"Pedro Jorge\" link \"https://www.facebook.com/pedrombjorge\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 13675521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 12664320,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 29988160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 48
    },
    {
      "val": "https://www.facebook.com/pedrombjorge",
      "offset": 67
    }
  ],
  "location": "Stepdefs.theApplicationShowFacebookIconWith(String,String)"
});
formatter.result({
  "duration": 14373963,
  "status": "passed"
});
formatter.after({
  "duration": 357053,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 102,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "exists \"\u003cmembers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "the application show the member \"\u003cmembers\u003e\" default link \"\u003cfacebook link default\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 108,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;",
  "rows": [
    {
      "cells": [
        "members",
        "facebook link default"
      ],
      "line": 109,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "https://www.facebook.com/"
      ],
      "line": 110,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "https://www.facebook.com/"
      ],
      "line": 111,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "https://www.facebook.com/"
      ],
      "line": 112,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6826687,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "the application show the member \"Miriam Pereira\" default link \"https://www.facebook.com/\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 10678109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 14654851,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 21953109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 33
    },
    {
      "val": "https://www.facebook.com/",
      "offset": 63
    }
  ],
  "location": "Stepdefs.theApplicationShowThe(String,String)"
});
formatter.result({
  "duration": 15609335,
  "status": "passed"
});
formatter.after({
  "duration": 350571,
  "status": "passed"
});
formatter.before({
  "duration": 10258936,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "the application show the member \"Vítor Dias\" default link \"https://www.facebook.com/\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 12201933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 22147030,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31058239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 33
    },
    {
      "val": "https://www.facebook.com/",
      "offset": 59
    }
  ],
  "location": "Stepdefs.theApplicationShowThe(String,String)"
});
formatter.result({
  "duration": 15705485,
  "status": "passed"
});
formatter.after({
  "duration": 284671,
  "status": "passed"
});
formatter.before({
  "duration": 9752796,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "the application show the member \"Pedro Jorge\" default link \"https://www.facebook.com/\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 12239205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 16671312,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 25364832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 33
    },
    {
      "val": "https://www.facebook.com/",
      "offset": 60
    }
  ],
  "location": "Stepdefs.theApplicationShowThe(String,String)"
});
formatter.result({
  "duration": 15101034,
  "status": "passed"
});
formatter.after({
  "duration": 835645,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 114,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 115,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "exists \"\u003cmembers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "the application show linkedin icon with member \"\u003cmembers\u003e\" link \"\u003clinkedin link\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 120,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;",
  "rows": [
    {
      "cells": [
        "members",
        "linkedin link"
      ],
      "line": 121,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "https://www.linkedin.com/in/miriammpereira/"
      ],
      "line": 122,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "https://www.linkedin.com/in/vitor-dias-6aa9a310b/"
      ],
      "line": 123,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "https://www.linkedin.com/in/pedrombjorge/"
      ],
      "line": 124,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11358725,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 115,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "the application show linkedin icon with member \"Miriam Pereira\" link \"https://www.linkedin.com/in/miriammpereira/\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 13466475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 15033512,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 20446571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 48
    },
    {
      "val": "https://www.linkedin.com/in/miriammpereira/",
      "offset": 70
    }
  ],
  "location": "Stepdefs.theApplicationShowLinkedinIconWithMemberLink(String,String)"
});
formatter.result({
  "duration": 15579086,
  "status": "passed"
});
formatter.after({
  "duration": 392705,
  "status": "passed"
});
formatter.before({
  "duration": 11379252,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 115,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "the application show linkedin icon with member \"Vítor Dias\" link \"https://www.linkedin.com/in/vitor-dias-6aa9a310b/\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 12643254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 17152605,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 53502904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 48
    },
    {
      "val": "https://www.linkedin.com/in/vitor-dias-6aa9a310b/",
      "offset": 66
    }
  ],
  "location": "Stepdefs.theApplicationShowLinkedinIconWithMemberLink(String,String)"
});
formatter.result({
  "duration": 18169208,
  "status": "passed"
});
formatter.after({
  "duration": 1018223,
  "status": "passed"
});
formatter.before({
  "duration": 14848774,
  "status": "passed"
});
formatter.scenario({
  "line": 124,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 115,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "the application show linkedin icon with member \"Pedro Jorge\" link \"https://www.linkedin.com/in/pedrombjorge/\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 13256889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 15176118,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 20481682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 48
    },
    {
      "val": "https://www.linkedin.com/in/pedrombjorge/",
      "offset": 67
    }
  ],
  "location": "Stepdefs.theApplicationShowLinkedinIconWithMemberLink(String,String)"
});
formatter.result({
  "duration": 15955045,
  "status": "passed"
});
formatter.after({
  "duration": 471570,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 126,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 127,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "exists \"\u003cmembers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "the application show the member \"\u003cmembers\u003e\" link \"\u003clinkedin link default\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 132,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;",
  "rows": [
    {
      "cells": [
        "members",
        "linkedin link default"
      ],
      "line": 133,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "https://www.linkedin.com/"
      ],
      "line": 134,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "https://www.linkedin.com/"
      ],
      "line": 135,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "https://www.linkedin.com/"
      ],
      "line": 136,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9345507,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 127,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "the application show the member \"Miriam Pereira\" link \"https://www.linkedin.com/\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 10423689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 20333675,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 23726492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 33
    },
    {
      "val": "https://www.linkedin.com/",
      "offset": 55
    }
  ],
  "location": "Stepdefs.theApplicationShowTheMemberLink(String,String)"
});
formatter.result({
  "duration": 16145726,
  "status": "passed"
});
formatter.after({
  "duration": 338148,
  "status": "passed"
});
formatter.before({
  "duration": 10051511,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 127,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "the application show the member \"Vítor Dias\" link \"https://www.linkedin.com/\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 12359664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 15087529,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 67566808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 33
    },
    {
      "val": "https://www.linkedin.com/",
      "offset": 51
    }
  ],
  "location": "Stepdefs.theApplicationShowTheMemberLink(String,String)"
});
formatter.result({
  "duration": 17248215,
  "status": "passed"
});
formatter.after({
  "duration": 757321,
  "status": "passed"
});
formatter.before({
  "duration": 11366828,
  "status": "passed"
});
formatter.scenario({
  "line": 136,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 127,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "the application show the member \"Pedro Jorge\" link \"https://www.linkedin.com/\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 11224763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 14210831,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 28331994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 33
    },
    {
      "val": "https://www.linkedin.com/",
      "offset": 52
    }
  ],
  "location": "Stepdefs.theApplicationShowTheMemberLink(String,String)"
});
formatter.result({
  "duration": 17723026,
  "status": "passed"
});
formatter.after({
  "duration": 865354,
  "status": "passed"
});
formatter.uri("userStory2.feature");
formatter.feature({
  "line": 1,
  "name": "User views the detailed information of the member of the team (pedro, vítor and miriam)",
  "description": "As an user\r\nI want to see the detailed information of the member of the team (pedro, vítor and miriam)\r\nSo that I see all the information about the member",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "View the information",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);view-the-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "exists \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user click on \"\u003cmembers\u003e\" of the team",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the application opens a new page with all information and \"\u003cname\u003e\" about the \"\u003cmembers\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);view-the-information;",
  "rows": [
    {
      "cells": [
        "members",
        "name"
      ],
      "line": 12,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);view-the-information;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "Miriam Pereira"
      ],
      "line": 13,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);view-the-information;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "Vítor Dias"
      ],
      "line": 14,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);view-the-information;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "Pedro Jorge"
      ],
      "line": 15,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);view-the-information;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9533486,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "View the information",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);view-the-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user click on \"Miriam Pereira\" of the team",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the application opens a new page with all information and \"Miriam Pereira\" about the \"Miriam Pereira\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 14883345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 19
    }
  ],
  "location": "Stepdefs.theUserClickOnOfTheTeam(String)"
});
formatter.result({
  "duration": 198908421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 59
    },
    {
      "val": "Miriam Pereira",
      "offset": 86
    }
  ],
  "location": "Stepdefs.theApplicationOpensANewPageWithAllInformationAndAboutThe(String,String)"
});
formatter.result({
  "duration": 70787851,
  "status": "passed"
});
formatter.after({
  "duration": 960425,
  "status": "passed"
});
formatter.before({
  "duration": 9074340,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "View the information",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);view-the-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user click on \"Vítor Dias\" of the team",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the application opens a new page with all information and \"Vítor Dias\" about the \"Vítor Dias\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 28625847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 19
    }
  ],
  "location": "Stepdefs.theUserClickOnOfTheTeam(String)"
});
formatter.result({
  "duration": 260484728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 59
    },
    {
      "val": "Vítor Dias",
      "offset": 82
    }
  ],
  "location": "Stepdefs.theApplicationOpensANewPageWithAllInformationAndAboutThe(String,String)"
});
formatter.result({
  "duration": 40531767,
  "status": "passed"
});
formatter.after({
  "duration": 830244,
  "status": "passed"
});
formatter.before({
  "duration": 8544433,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "View the information",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);view-the-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user click on \"Pedro Jorge\" of the team",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the application opens a new page with all information and \"Pedro Jorge\" about the \"Pedro Jorge\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 8
    }
  ],
  "location": "Stepdefs.exists(String)"
});
formatter.result({
  "duration": 12040962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 19
    }
  ],
  "location": "Stepdefs.theUserClickOnOfTheTeam(String)"
});
formatter.result({
  "duration": 275639779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 59
    },
    {
      "val": "Pedro Jorge",
      "offset": 83
    }
  ],
  "location": "Stepdefs.theApplicationOpensANewPageWithAllInformationAndAboutThe(String,String)"
});
formatter.result({
  "duration": 47329825,
  "status": "passed"
});
formatter.after({
  "duration": 312219,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "An member have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the application show \"\u003cmembers\u003e\" name \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;",
  "rows": [
    {
      "cells": [
        "members",
        "name"
      ],
      "line": 24,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "Miriam de Mesquita Pereira"
      ],
      "line": 25,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "Vítor Fernandes Dias"
      ],
      "line": 26,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "Pedro Miguel Brito Jorge"
      ],
      "line": 27,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10875272,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "An member have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the application show \"Miriam Pereira\" name \"Miriam de Mesquita Pereira\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 41789826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 8
    }
  ],
  "location": "Stepdefs.existsOnDetailedPage(String)"
});
formatter.result({
  "duration": 54703705,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 84514148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 22
    },
    {
      "val": "Miriam de Mesquita Pereira",
      "offset": 44
    }
  ],
  "location": "Stepdefs.theApplicationShowName(String,String)"
});
formatter.result({
  "duration": 274083005,
  "status": "passed"
});
formatter.after({
  "duration": 495877,
  "status": "passed"
});
formatter.before({
  "duration": 12218679,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "An member have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the application show \"Vítor Dias\" name \"Vítor Fernandes Dias\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 30466211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 8
    }
  ],
  "location": "Stepdefs.existsOnDetailedPage(String)"
});
formatter.result({
  "duration": 52278335,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 85450805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 22
    },
    {
      "val": "Vítor Fernandes Dias",
      "offset": 40
    }
  ],
  "location": "Stepdefs.theApplicationShowName(String,String)"
});
formatter.result({
  "duration": 238008734,
  "status": "passed"
});
formatter.after({
  "duration": 587166,
  "status": "passed"
});
formatter.before({
  "duration": 14899550,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "An member have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the application show \"Pedro Jorge\" name \"Pedro Miguel Brito Jorge\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 39527588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 8
    }
  ],
  "location": "Stepdefs.existsOnDetailedPage(String)"
});
formatter.result({
  "duration": 54780409,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 83731980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 22
    },
    {
      "val": "Pedro Miguel Brito Jorge",
      "offset": 41
    }
  ],
  "location": "Stepdefs.theApplicationShowName(String,String)"
});
formatter.result({
  "duration": 234064401,
  "status": "passed"
});
formatter.after({
  "duration": 295474,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "An member don\u0027t have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "some \u003cmember\u003e of team don\u0027t have name",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the application show \u003cdefault name\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;",
  "rows": [
    {
      "cells": [
        "members",
        "default name"
      ],
      "line": 36,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;1"
    },
    {
      "cells": [
        "miriam",
        "User"
      ],
      "line": 37,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;2"
    },
    {
      "cells": [
        "vítor",
        "User"
      ],
      "line": 38,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;3"
    },
    {
      "cells": [
        "pedro",
        "User"
      ],
      "line": 39,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9344426,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "An member don\u0027t have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "that I\u0027m in the detailed page of \"miriam\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "some \u003cmember\u003e of team don\u0027t have name",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the application show User",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "miriam",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 27886893,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 10312954,
  "status": "passed"
});
formatter.before({
  "duration": 12960874,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "An member don\u0027t have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "that I\u0027m in the detailed page of \"vítor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "some \u003cmember\u003e of team don\u0027t have name",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the application show User",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vítor",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 34729785,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 257121,
  "status": "passed"
});
formatter.before({
  "duration": 7002242,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "An member don\u0027t have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "that I\u0027m in the detailed page of \"pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "some \u003cmember\u003e of team don\u0027t have name",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the application show User",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pedro",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 24220208,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 236595,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "some \u003cmember\u003e of team have \u003cphoto\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the application show \u003cmember\u003e\u0027s \u003cphoto\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;",
  "rows": [
    {
      "cells": [
        "members",
        "photo"
      ],
      "line": 48,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;1"
    },
    {
      "cells": [
        "miriam",
        "miriam.jpg"
      ],
      "line": 49,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;2"
    },
    {
      "cells": [
        "vítor",
        "vítor.jpg"
      ],
      "line": 50,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;3"
    },
    {
      "cells": [
        "pedro",
        "pedro.jpg"
      ],
      "line": 51,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5754447,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "that I\u0027m in the detailed page of \"miriam\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "some \u003cmember\u003e of team have miriam.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the application show \u003cmember\u003e\u0027s miriam.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "miriam",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 32756538,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 792431,
  "status": "passed"
});
formatter.before({
  "duration": 17678732,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "that I\u0027m in the detailed page of \"vítor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "some \u003cmember\u003e of team have vítor.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the application show \u003cmember\u003e\u0027s vítor.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vítor",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 25247614,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 222550,
  "status": "passed"
});
formatter.before({
  "duration": 6399951,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "that I\u0027m in the detailed page of \"pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "some \u003cmember\u003e of team have pedro.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the application show \u003cmember\u003e\u0027s pedro.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pedro",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 25422630,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 232273,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "some \u003cmember\u003e of team don\u0027t have photo",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the application show a \u003cdefault photo\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;",
  "rows": [
    {
      "cells": [
        "members",
        "default photo"
      ],
      "line": 60,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;1"
    },
    {
      "cells": [
        "miriam",
        "default.jpg"
      ],
      "line": 61,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;2"
    },
    {
      "cells": [
        "vítor",
        "default.jpg"
      ],
      "line": 62,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;3"
    },
    {
      "cells": [
        "pedro",
        "default.jpg"
      ],
      "line": 63,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10614370,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "that I\u0027m in the detailed page of \"miriam\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "some \u003cmember\u003e of team don\u0027t have photo",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the application show a default.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "miriam",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 26840580,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 402968,
  "status": "passed"
});
formatter.before({
  "duration": 8501759,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "that I\u0027m in the detailed page of \"vítor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "some \u003cmember\u003e of team don\u0027t have photo",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the application show a default.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vítor",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 34929648,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 250100,
  "status": "passed"
});
formatter.before({
  "duration": 19105325,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "that I\u0027m in the detailed page of \"pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "some \u003cmember\u003e of team don\u0027t have photo",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the application show a default.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pedro",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 34263076,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 271706,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 65,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 66,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "some \u003cmember\u003e of team have \u003cshort bio\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "the application show \u003cmember\u003e \u003cshort bio\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;",
  "rows": [
    {
      "cells": [
        "members",
        "short bio"
      ],
      "line": 72,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;1"
    },
    {
      "cells": [
        "miriam",
        "21 years. Master\u0027s student. Front end developer."
      ],
      "line": 73,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;2"
    },
    {
      "cells": [
        "vítor",
        "22 years. Master\u0027s student. Front end developer."
      ],
      "line": 74,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;3"
    },
    {
      "cells": [
        "pedro",
        "22 years. Master\u0027s student."
      ],
      "line": 75,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9584803,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 66,
  "name": "that I\u0027m in the detailed page of \"miriam\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "some \u003cmember\u003e of team have 21 years. Master\u0027s student. Front end developer.",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "the application show \u003cmember\u003e 21 years. Master\u0027s student. Front end developer.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "miriam",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 35509792,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 278729,
  "status": "passed"
});
formatter.before({
  "duration": 7101094,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 66,
  "name": "that I\u0027m in the detailed page of \"vítor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "some \u003cmember\u003e of team have 22 years. Master\u0027s student. Front end developer.",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "the application show \u003cmember\u003e 22 years. Master\u0027s student. Front end developer.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vítor",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 26586160,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 233894,
  "status": "passed"
});
formatter.before({
  "duration": 8922553,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 66,
  "name": "that I\u0027m in the detailed page of \"pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "some \u003cmember\u003e of team have 22 years. Master\u0027s student.",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "the application show \u003cmember\u003e 22 years. Master\u0027s student.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pedro",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 26438152,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 246318,
  "status": "passed"
});
formatter.before({
  "duration": 5646413,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 78,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "some member of team don\u0027t have short bio",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the application don\u0027t show member\u0027s short bio",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmembers\u003e",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 34043227,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 460766,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 83,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "some \u003cmember\u003e of team have \u003cfacebook link\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the application show facebook icon with \u003cmember\u003e\u0027s \u003cfacebook link\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 89,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;",
  "rows": [
    {
      "cells": [
        "members",
        "facebook link"
      ],
      "line": 90,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;1"
    },
    {
      "cells": [
        "miriam",
        "https://www.facebook.com/miriampereira95"
      ],
      "line": 91,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2"
    },
    {
      "cells": [
        "vítor",
        "https://www.facebook.com/vitor.dias.3954"
      ],
      "line": 92,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3"
    },
    {
      "cells": [
        "pedro",
        "https://www.facebook.com/pedrombjorge"
      ],
      "line": 93,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7718510,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "that I\u0027m in the detailed page of \"miriam\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "some \u003cmember\u003e of team have https://www.facebook.com/miriampereira95",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the application show facebook icon with \u003cmember\u003e\u0027s https://www.facebook.com/miriampereira95",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "miriam",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 36794320,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 298175,
  "status": "passed"
});
formatter.before({
  "duration": 8738354,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "that I\u0027m in the detailed page of \"vítor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "some \u003cmember\u003e of team have https://www.facebook.com/vitor.dias.3954",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the application show facebook icon with \u003cmember\u003e\u0027s https://www.facebook.com/vitor.dias.3954",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vítor",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 37714773,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 314380,
  "status": "passed"
});
formatter.before({
  "duration": 17978527,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "that I\u0027m in the detailed page of \"pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "some \u003cmember\u003e of team have https://www.facebook.com/pedrombjorge",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the application show facebook icon with \u003cmember\u003e\u0027s https://www.facebook.com/pedrombjorge",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pedro",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 32268223,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1007960,
  "status": "passed"
});
formatter.before({
  "duration": 9065158,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 96,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "some member of team don\u0027t have facebook link",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "the application show the disabled facebook icon",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmembers\u003e",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 34227966,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 310058,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 101,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "some \u003cmember\u003e of team have \u003clinkedin link\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "the application show linkedin icon with \u003cmember\u003e\u0027s \u003clinkedin link\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 107,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;",
  "rows": [
    {
      "cells": [
        "members",
        "linkedin link"
      ],
      "line": 108,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;1"
    },
    {
      "cells": [
        "miriam",
        "https://www.linkedin.com/in/miriammpereira/"
      ],
      "line": 109,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2"
    },
    {
      "cells": [
        "vítor",
        "https://www.linkedin.com/in/vítor-dias-6aa9a310b/"
      ],
      "line": 110,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3"
    },
    {
      "cells": [
        "pedro",
        "https://www.linkedin.com/in/pedrombjorge/"
      ],
      "line": 111,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8953342,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "that I\u0027m in the detailed page of \"miriam\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "some \u003cmember\u003e of team have https://www.linkedin.com/in/miriammpereira/",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "the application show linkedin icon with \u003cmember\u003e\u0027s https://www.linkedin.com/in/miriammpereira/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "miriam",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 38984716,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1214305,
  "status": "passed"
});
formatter.before({
  "duration": 26394939,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "that I\u0027m in the detailed page of \"vítor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "some \u003cmember\u003e of team have https://www.linkedin.com/in/vítor-dias-6aa9a310b/",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "the application show linkedin icon with \u003cmember\u003e\u0027s https://www.linkedin.com/in/vítor-dias-6aa9a310b/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vítor",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 37059544,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 257662,
  "status": "passed"
});
formatter.before({
  "duration": 10031524,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "that I\u0027m in the detailed page of \"pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "some \u003cmember\u003e of team have https://www.linkedin.com/in/pedrombjorge/",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "the application show linkedin icon with \u003cmember\u003e\u0027s https://www.linkedin.com/in/pedrombjorge/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pedro",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 84151693,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 287371,
  "status": "passed"
});
formatter.before({
  "duration": 7854093,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "some member of team don\u0027t have linkedin link",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "the application show the disabled linkedin icon",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmembers\u003e",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 26377654,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 510462,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 119,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 120,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "some \u003cmember\u003e of team have \u003cprojects\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "the application show the \u003cmember\u003e\u0027s \u003cprojects\u003e.",
  "keyword": "Then "
});
formatter.examples({
  "line": 125,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;",
  "rows": [
    {
      "cells": [
        "members",
        "projects"
      ],
      "line": 126,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;1"
    },
    {
      "cells": [
        "miriam",
        "Irrigation4U, UCook, SIGOC"
      ],
      "line": 127,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;2"
    },
    {
      "cells": [
        "vítor",
        "Irrigation4U, UCook, Leilão de Artigos"
      ],
      "line": 128,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;3"
    },
    {
      "cells": [
        "pedro",
        "Irrigation4U, UCook, Leilão de Artigos"
      ],
      "line": 129,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7891365,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 120,
  "name": "that I\u0027m in the detailed page of \"miriam\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "some \u003cmember\u003e of team have Irrigation4U, UCook, SIGOC",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "the application show the \u003cmember\u003e\u0027s Irrigation4U, UCook, SIGOC.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "miriam",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 25149844,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 715187,
  "status": "passed"
});
formatter.before({
  "duration": 10249214,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 120,
  "name": "that I\u0027m in the detailed page of \"vítor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "some \u003cmember\u003e of team have Irrigation4U, UCook, Leilão de Artigos",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "the application show the \u003cmember\u003e\u0027s Irrigation4U, UCook, Leilão de Artigos.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vítor",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 39223471,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 293853,
  "status": "passed"
});
formatter.before({
  "duration": 7743358,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 120,
  "name": "that I\u0027m in the detailed page of \"pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "some \u003cmember\u003e of team have Irrigation4U, UCook, Leilão de Artigos",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "the application show the \u003cmember\u003e\u0027s Irrigation4U, UCook, Leilão de Artigos.",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pedro",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 36395674,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 289532,
  "status": "passed"
});
formatter.before({
  "duration": 9582101,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "An member don\u0027t have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-projects",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 132,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "some member of team don\u0027t have projects",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "the application don\u0027t show the projects section",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmembers\u003e",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 38827526,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 312219,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 137,
  "name": "An member have certificates",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "some \u003cmember\u003e of team have \u003ccertificates\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "the application show the \u003cmember\u003e\u0027s \u003ccertificates\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 143,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;",
  "rows": [
    {
      "cells": [
        "members",
        "certificates"
      ],
      "line": 144,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;1"
    },
    {
      "cells": [
        "miriam",
        "CodeSchool, EggHead"
      ],
      "line": 145,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;2"
    },
    {
      "cells": [
        "vítor",
        "CodeSchool, EggHead"
      ],
      "line": 146,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;3"
    },
    {
      "cells": [
        "pedro",
        "Marketing Digital, FPF"
      ],
      "line": 147,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11052448,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "An member have certificates",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "that I\u0027m in the detailed page of \"miriam\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "some \u003cmember\u003e of team have CodeSchool, EggHead",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "the application show the \u003cmember\u003e\u0027s CodeSchool, EggHead",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "miriam",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 48241633,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2165007,
  "status": "passed"
});
formatter.before({
  "duration": 10120113,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "An member have certificates",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "that I\u0027m in the detailed page of \"vítor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "some \u003cmember\u003e of team have CodeSchool, EggHead",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "the application show the \u003cmember\u003e\u0027s CodeSchool, EggHead",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vítor",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 34795145,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 536391,
  "status": "passed"
});
formatter.before({
  "duration": 9821398,
  "status": "passed"
});
formatter.scenario({
  "line": 147,
  "name": "An member have certificates",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "that I\u0027m in the detailed page of \"pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "some \u003cmember\u003e of team have Marketing Digital, FPF",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "the application show the \u003cmember\u003e\u0027s Marketing Digital, FPF",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pedro",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 40139062,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 555296,
  "status": "passed"
});
formatter.before({
  "duration": 8574142,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "An member don\u0027t have certificates",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-certificates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 150,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "some member of team don\u0027t have certificates",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "the application don\u0027t show the certificates section",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmembers\u003e",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 33454980,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 494797,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 155,
  "name": "An member have languages",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 156,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "some \u003cmember\u003e of team have \u003clanguages\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "the application show the \u003cmember\u003e\u0027s \u003clanguages\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 161,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;",
  "rows": [
    {
      "cells": [
        "members",
        "languages"
      ],
      "line": 162,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;1"
    },
    {
      "cells": [
        "miriam",
        "Portuguese, English, Spanish"
      ],
      "line": 163,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;2"
    },
    {
      "cells": [
        "vítor",
        "Portuguese, English, Spanish, French"
      ],
      "line": 164,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;3"
    },
    {
      "cells": [
        "pedro",
        "Portuguese, English, Spanish"
      ],
      "line": 165,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8306757,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "An member have languages",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 156,
  "name": "that I\u0027m in the detailed page of \"miriam\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "some \u003cmember\u003e of team have Portuguese, English, Spanish",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "the application show the \u003cmember\u003e\u0027s Portuguese, English, Spanish",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "miriam",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 43865164,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 259823,
  "status": "passed"
});
formatter.before({
  "duration": 8884741,
  "status": "passed"
});
formatter.scenario({
  "line": 164,
  "name": "An member have languages",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 156,
  "name": "that I\u0027m in the detailed page of \"vítor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "some \u003cmember\u003e of team have Portuguese, English, Spanish, French",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "the application show the \u003cmember\u003e\u0027s Portuguese, English, Spanish, French",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vítor",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 41400902,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 256582,
  "status": "passed"
});
formatter.before({
  "duration": 7331207,
  "status": "passed"
});
formatter.scenario({
  "line": 165,
  "name": "An member have languages",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 156,
  "name": "that I\u0027m in the detailed page of \"pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "some \u003cmember\u003e of team have Portuguese, English, Spanish",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "the application show the \u003cmember\u003e\u0027s Portuguese, English, Spanish",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pedro",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 47894844,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 549894,
  "status": "passed"
});
formatter.before({
  "duration": 10292427,
  "status": "passed"
});
formatter.scenario({
  "line": 167,
  "name": "An member don\u0027t have languages",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-languages",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 168,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "some member of team don\u0027t have languages",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "the application don\u0027t show the languages section",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmembers\u003e",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 28951570,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 267925,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 173,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 174,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "some \u003cmember\u003e of team have \u003ctags\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "the application show the \u003cmember\u003e\u0027s \u003ctags\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 179,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;",
  "rows": [
    {
      "cells": [
        "members",
        "tags"
      ],
      "line": 180,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;1"
    },
    {
      "cells": [
        "miriam",
        "#PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP"
      ],
      "line": 181,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;2"
    },
    {
      "cells": [
        "vítor",
        "#PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL"
      ],
      "line": 182,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;3"
    },
    {
      "cells": [
        "pedro",
        "#PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS"
      ],
      "line": 183,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9727948,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 174,
  "name": "that I\u0027m in the detailed page of \"miriam\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "some \u003cmember\u003e of team have #PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "the application show the \u003cmember\u003e\u0027s #PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "miriam",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 30808680,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 252800,
  "status": "passed"
});
formatter.before({
  "duration": 6728916,
  "status": "passed"
});
formatter.scenario({
  "line": 182,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 174,
  "name": "that I\u0027m in the detailed page of \"vítor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "some \u003cmember\u003e of team have #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "the application show the \u003cmember\u003e\u0027s #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vítor",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 32175854,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 222551,
  "status": "passed"
});
formatter.before({
  "duration": 6408594,
  "status": "passed"
});
formatter.scenario({
  "line": 183,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 174,
  "name": "that I\u0027m in the detailed page of \"pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "some \u003cmember\u003e of team have #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "the application show the \u003cmember\u003e\u0027s #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pedro",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 29220035,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 740035,
  "status": "passed"
});
formatter.before({
  "duration": 7873539,
  "status": "passed"
});
formatter.scenario({
  "line": 185,
  "name": "An member don\u0027t have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 186,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 187,
  "name": "some member of team don\u0027t have tags",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 189,
  "name": "the application don\u0027t show the tags section",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmembers\u003e",
      "offset": 34
    }
  ],
  "location": "Stepdefs.thatIMInTheDetailedPageOf(String)"
});
formatter.result({
  "duration": 36727339,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 286831,
  "status": "passed"
});
formatter.uri("userStory3.feature");
formatter.feature({
  "line": 1,
  "name": "User search for the tags",
  "description": "As an user\r\nI want to search for tags\r\nSo that I can view first the most relevant informations",
  "id": "user-search-for-the-tags",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13691186,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Found members with searched tags",
  "description": "",
  "id": "user-search-for-the-tags;found-members-with-searched-tags",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "exists members in application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user search for tags",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "shows information which members contain the searched tags",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 488315,
  "status": "passed"
});
formatter.before({
  "duration": 6358898,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Don\u0027t found members with searched tags",
  "description": "",
  "id": "user-search-for-the-tags;don\u0027t-found-members-with-searched-tags",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "exists members in application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user search for tags",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "shows information that no members was found with searched tags",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 267385,
  "status": "passed"
});
formatter.before({
  "duration": 6861258,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search members with multiple tags (simultaneous \u0026\u0026)",
  "description": "",
  "id": "user-search-for-the-tags;search-members-with-multiple-tags-(simultaneous-\u0026\u0026)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "exists members in application",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user wants to find members with more than one tag at a time",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "shows information in each of the members of how many tags were found in it (ex: 4/5)",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 482373,
  "status": "passed"
});
formatter.before({
  "duration": 8299195,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search members with multiple tags (or ||)",
  "description": "",
  "id": "user-search-for-the-tags;search-members-with-multiple-tags-(or-||)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "exists members in application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the user wants to find members that fit in at least one of the searched tags",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "shows information in each of the profile on the tags found",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 523966,
  "status": "passed"
});
});