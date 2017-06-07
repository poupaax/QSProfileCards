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
  "duration": 2987787804,
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
  "duration": 321059017,
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
  "duration": 1470799951,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 137674583,
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
  "duration": 363542423,
  "status": "passed"
});
formatter.after({
  "duration": 1174332,
  "status": "passed"
});
formatter.before({
  "duration": 289274788,
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
  "duration": 40230351,
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
  "duration": 295614779,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 84751824,
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
  "duration": 295984258,
  "status": "passed"
});
formatter.after({
  "duration": 722209,
  "status": "passed"
});
formatter.before({
  "duration": 21926640,
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
  "duration": 20573511,
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
  "duration": 312590208,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 46696203,
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
  "duration": 292530401,
  "status": "passed"
});
formatter.after({
  "duration": 406209,
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
  "duration": 12958173,
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
  "duration": 21457771,
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
  "duration": 38758923,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 51265514,
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
  "duration": 314637998,
  "status": "passed"
});
formatter.after({
  "duration": 663331,
  "status": "passed"
});
formatter.before({
  "duration": 21782414,
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
  "duration": 25049912,
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
  "duration": 35261854,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 46109577,
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
  "duration": 227102132,
  "status": "passed"
});
formatter.after({
  "duration": 318161,
  "status": "passed"
});
formatter.before({
  "duration": 7498120,
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
  "duration": 12747506,
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
  "duration": 15328986,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27331056,
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
  "duration": 263066208,
  "status": "passed"
});
formatter.after({
  "duration": 364076,
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
  "duration": 11506733,
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
  "duration": 12918741,
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
  "duration": 21542578,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 26838420,
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
  "duration": 249333969,
  "status": "passed"
});
formatter.after({
  "duration": 299255,
  "status": "passed"
});
formatter.before({
  "duration": 9013301,
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
  "duration": 12719958,
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
  "duration": 12753988,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 24356332,
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
  "duration": 208449470,
  "status": "passed"
});
formatter.after({
  "duration": 292233,
  "status": "passed"
});
formatter.before({
  "duration": 5858160,
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
  "duration": 10445836,
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
  "duration": 12147917,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 21928260,
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
  "duration": 190413685,
  "status": "passed"
});
formatter.after({
  "duration": 723290,
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
  "duration": 7405211,
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
  "duration": 9959141,
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
  "duration": 11716319,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 21218475,
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
  "duration": 13628526,
  "status": "passed"
});
formatter.after({
  "duration": 515324,
  "status": "passed"
});
formatter.before({
  "duration": 6562543,
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
  "duration": 12839335,
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
  "duration": 24848428,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 32865113,
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
  "duration": 16978130,
  "status": "passed"
});
formatter.after({
  "duration": 292773,
  "status": "passed"
});
formatter.before({
  "duration": 31954924,
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
  "duration": 12592477,
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
  "duration": 10787765,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 19540162,
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
  "duration": 15605554,
  "status": "passed"
});
formatter.after({
  "duration": 642264,
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
  "duration": 6618721,
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
  "duration": 8324042,
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
  "duration": 14185983,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 59544722,
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
  "duration": 32908326,
  "status": "passed"
});
formatter.after({
  "duration": 454284,
  "status": "passed"
});
formatter.before({
  "duration": 23984153,
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
  "duration": 12802604,
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
  "duration": 23508803,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31632441,
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
  "duration": 22370661,
  "status": "passed"
});
formatter.after({
  "duration": 771365,
  "status": "passed"
});
formatter.before({
  "duration": 20160280,
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
  "duration": 9629637,
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
  "duration": 14399351,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31367217,
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
  "duration": 16312098,
  "status": "passed"
});
formatter.after({
  "duration": 841047,
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
  "duration": 10896339,
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
  "duration": 9585343,
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
  "duration": 16544372,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 29485260,
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
  "duration": 274387662,
  "status": "passed"
});
formatter.after({
  "duration": 909108,
  "status": "passed"
});
formatter.before({
  "duration": 5522173,
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
  "duration": 10269200,
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
  "duration": 18618090,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 28570209,
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
  "duration": 257271789,
  "status": "passed"
});
formatter.after({
  "duration": 500199,
  "status": "passed"
});
formatter.before({
  "duration": 16160850,
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
  "duration": 12314829,
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
  "duration": 14902251,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 25593865,
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
  "duration": 313052055,
  "status": "passed"
});
formatter.after({
  "duration": 545033,
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
  "duration": 5932163,
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
  "duration": 14205429,
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
  "duration": 22145410,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 22676398,
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
  "duration": 231943148,
  "status": "passed"
});
formatter.after({
  "duration": 287912,
  "status": "passed"
});
formatter.before({
  "duration": 11783300,
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
  "duration": 14330749,
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
  "duration": 14971393,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 46580607,
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
  "duration": 233757584,
  "status": "passed"
});
formatter.after({
  "duration": 273866,
  "status": "passed"
});
formatter.before({
  "duration": 6872602,
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
  "duration": 9631257,
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
  "duration": 16689678,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31881460,
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
  "duration": 318531554,
  "status": "passed"
});
formatter.after({
  "duration": 470489,
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
  "duration": 11848661,
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
  "duration": 11627731,
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
  "duration": 15461328,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 28996945,
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
  "duration": 20334215,
  "status": "passed"
});
formatter.after({
  "duration": 780008,
  "status": "passed"
});
formatter.before({
  "duration": 14097935,
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
  "duration": 11847040,
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
  "duration": 28215857,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 29613821,
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
  "duration": 15311160,
  "status": "passed"
});
formatter.after({
  "duration": 998237,
  "status": "passed"
});
formatter.before({
  "duration": 13565866,
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
  "duration": 10794246,
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
  "duration": 23834526,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 32427574,
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
  "duration": 19123691,
  "status": "passed"
});
formatter.after({
  "duration": 1387161,
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
  "duration": 9766840,
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
  "duration": 12802604,
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
  "duration": 17897501,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 25061795,
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
  "duration": 15583947,
  "status": "passed"
});
formatter.after({
  "duration": 811878,
  "status": "passed"
});
formatter.before({
  "duration": 7473273,
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
  "duration": 13253647,
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
  "duration": 12105783,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 28914839,
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
  "duration": 14229737,
  "status": "passed"
});
formatter.after({
  "duration": 309518,
  "status": "passed"
});
formatter.before({
  "duration": 8880419,
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
  "duration": 11270137,
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
  "duration": 14222175,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 23671394,
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
  "duration": 13690646,
  "status": "passed"
});
formatter.after({
  "duration": 770825,
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
  "duration": 8939837,
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
  "duration": 13664178,
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
  "duration": 14874701,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 23759982,
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
  "duration": 15398128,
  "status": "passed"
});
formatter.after({
  "duration": 812418,
  "status": "passed"
});
formatter.before({
  "duration": 7860575,
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
  "duration": 13038118,
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
  "duration": 12129550,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 25284346,
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
  "duration": 16706423,
  "status": "passed"
});
formatter.after({
  "duration": 713026,
  "status": "passed"
});
formatter.before({
  "duration": 10771020,
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
  "duration": 11466760,
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
  "duration": 14392869,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 25307034,
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
  "duration": 11540763,
  "status": "passed"
});
formatter.after({
  "duration": 435378,
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
  "duration": 8416952,
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
  "duration": 13588554,
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
  "duration": 17143422,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 29809902,
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
  "duration": 20818748,
  "status": "passed"
});
formatter.after({
  "duration": 1387700,
  "status": "passed"
});
formatter.before({
  "duration": 8423974,
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
  "duration": 11211259,
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
  "duration": 11901058,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 34812430,
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
  "duration": 11787082,
  "status": "passed"
});
formatter.after({
  "duration": 1170552,
  "status": "passed"
});
formatter.before({
  "duration": 7979953,
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
  "duration": 9658806,
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
  "duration": 14088752,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 24381719,
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
  "duration": 20284519,
  "status": "passed"
});
formatter.after({
  "duration": 771365,
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
formatter.before({
  "duration": 20969996,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "View the information",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);view-the-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "exists members of the team",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user click on member of the team",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the application opens a new page with all information about the member",
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
  "duration": 303577,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "An member have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "some \u003cmember\u003e of team have \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the application show \u003cmember\u003e\u0027s \u003cname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;",
  "rows": [
    {
      "cells": [
        "member",
        "name"
      ],
      "line": 18,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;1"
    },
    {
      "cells": [
        "miriam",
        "Miriam Pereira"
      ],
      "line": 19,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;2"
    },
    {
      "cells": [
        "vítor",
        "Vítor Dias"
      ],
      "line": 20,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;3"
    },
    {
      "cells": [
        "pedro",
        "Pedro Jorge"
      ],
      "line": 21,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8262463,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "An member have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "some miriam of team have Miriam Pereira",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the application show miriam\u0027s Miriam Pereira",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 297094,
  "status": "passed"
});
formatter.before({
  "duration": 11384654,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "An member have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "some vítor of team have Vítor Dias",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the application show vítor\u0027s Vítor Dias",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 612555,
  "status": "passed"
});
formatter.before({
  "duration": 10923888,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "An member have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "some pedro of team have Pedro Jorge",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the application show pedro\u0027s Pedro Jorge",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 743276,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "An member don\u0027t have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "some \u003cmember\u003e of team don\u0027t have name",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the application show \u003cdefault name\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;",
  "rows": [
    {
      "cells": [
        "member",
        "default name"
      ],
      "line": 30,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;1"
    },
    {
      "cells": [
        "miriam",
        "User"
      ],
      "line": 31,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;2"
    },
    {
      "cells": [
        "vítor",
        "User"
      ],
      "line": 32,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;3"
    },
    {
      "cells": [
        "pedro",
        "User"
      ],
      "line": 33,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9652324,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "An member don\u0027t have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "some miriam of team don\u0027t have name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the application show User",
  "matchedColumns": [
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 565559,
  "status": "passed"
});
formatter.before({
  "duration": 12365066,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "An member don\u0027t have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "some vítor of team don\u0027t have name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the application show User",
  "matchedColumns": [
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 849150,
  "status": "passed"
});
formatter.before({
  "duration": 10662444,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "An member don\u0027t have name",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "some pedro of team don\u0027t have name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the application show User",
  "matchedColumns": [
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 292773,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "some \u003cmember\u003e of team have \u003cphoto\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the application show \u003cmember\u003e\u0027s \u003cphoto\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;",
  "rows": [
    {
      "cells": [
        "member",
        "photo"
      ],
      "line": 42,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;1"
    },
    {
      "cells": [
        "miriam",
        "miriam.jpg"
      ],
      "line": 43,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;2"
    },
    {
      "cells": [
        "vítor",
        "vítor.jpg"
      ],
      "line": 44,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;3"
    },
    {
      "cells": [
        "pedro",
        "pedro.jpg"
      ],
      "line": 45,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10106608,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "some miriam of team have miriam.jpg",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the application show miriam\u0027s miriam.jpg",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3536502,
  "status": "passed"
});
formatter.before({
  "duration": 9446519,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "some vítor of team have vítor.jpg",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the application show vítor\u0027s vítor.jpg",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 386223,
  "status": "passed"
});
formatter.before({
  "duration": 13500506,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "some pedro of team have pedro.jpg",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the application show pedro\u0027s pedro.jpg",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 483994,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "some \u003cmember\u003e of team don\u0027t have photo",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "the application show a \u003cdefault photo\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;",
  "rows": [
    {
      "cells": [
        "member",
        "default photo"
      ],
      "line": 54,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;1"
    },
    {
      "cells": [
        "miriam",
        "default.jpg"
      ],
      "line": 55,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;2"
    },
    {
      "cells": [
        "vítor",
        "default.jpg"
      ],
      "line": 56,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;3"
    },
    {
      "cells": [
        "pedro",
        "default.jpg"
      ],
      "line": 57,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10337262,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "some miriam of team don\u0027t have photo",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "the application show a default.jpg",
  "matchedColumns": [
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 260903,
  "status": "passed"
});
formatter.before({
  "duration": 9126197,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "some vítor of team don\u0027t have photo",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "the application show a default.jpg",
  "matchedColumns": [
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3207538,
  "status": "passed"
});
formatter.before({
  "duration": 12595719,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "some pedro of team don\u0027t have photo",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "the application show a default.jpg",
  "matchedColumns": [
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
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
  "line": 59,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "some \u003cmember\u003e of team have \u003cshort bio\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "the application show \u003cmember\u003e \u003cshort bio\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;",
  "rows": [
    {
      "cells": [
        "member",
        "short bio"
      ],
      "line": 66,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;1"
    },
    {
      "cells": [
        "miriam",
        "21 years. Master\u0027s student. Front end developer."
      ],
      "line": 67,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;2"
    },
    {
      "cells": [
        "vítor",
        "22 years. Master\u0027s student. Front end developer."
      ],
      "line": 68,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;3"
    },
    {
      "cells": [
        "pedro",
        "22 years. Master\u0027s student."
      ],
      "line": 69,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9532406,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "some miriam of team have 21 years. Master\u0027s student. Front end developer.",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "the application show miriam 21 years. Master\u0027s student. Front end developer.",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 331666,
  "status": "passed"
});
formatter.before({
  "duration": 7006565,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "some vítor of team have 22 years. Master\u0027s student. Front end developer.",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "the application show vítor 22 years. Master\u0027s student. Front end developer.",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 293313,
  "status": "passed"
});
formatter.before({
  "duration": 5493004,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "some pedro of team have 22 years. Master\u0027s student.",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "the application show pedro 22 years. Master\u0027s student.",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
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
formatter.before({
  "duration": 6589552,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 72,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "some member of team don\u0027t have short bio",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "the application don\u0027t show member\u0027s short bio",
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 297635,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 77,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "some \u003cmember\u003e of team have \u003cfacebook link\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the application show facebook icon with \u003cmember\u003e\u0027s \u003cfacebook link\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 83,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;",
  "rows": [
    {
      "cells": [
        "member",
        "facebook link"
      ],
      "line": 84,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;1"
    },
    {
      "cells": [
        "miriam",
        "https://www.facebook.com/miriampereira95"
      ],
      "line": 85,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2"
    },
    {
      "cells": [
        "vítor",
        "https://www.facebook.com/vitor.dias.3954"
      ],
      "line": 86,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3"
    },
    {
      "cells": [
        "pedro",
        "https://www.facebook.com/pedrombjorge"
      ],
      "line": 87,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6211431,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "some miriam of team have https://www.facebook.com/miriampereira95",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the application show facebook icon with miriam\u0027s https://www.facebook.com/miriampereira95",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 297634,
  "status": "passed"
});
formatter.before({
  "duration": 6115822,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "some vítor of team have https://www.facebook.com/vitor.dias.3954",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the application show facebook icon with vítor\u0027s https://www.facebook.com/vitor.dias.3954",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
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
  "duration": 7741198,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "some pedro of team have https://www.facebook.com/pedrombjorge",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the application show facebook icon with pedro\u0027s https://www.facebook.com/pedrombjorge",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2806731,
  "status": "passed"
});
formatter.before({
  "duration": 8606012,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 90,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "some member of team don\u0027t have facebook link",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "the application show the disabled facebook icon",
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2314094,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 95,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 96,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "some \u003cmember\u003e of team have \u003clinkedin link\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "the application show linkedin icon with \u003cmember\u003e\u0027s \u003clinkedin link\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 101,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;",
  "rows": [
    {
      "cells": [
        "member",
        "linkedin link"
      ],
      "line": 102,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;1"
    },
    {
      "cells": [
        "miriam",
        "https://www.linkedin.com/in/miriammpereira/"
      ],
      "line": 103,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2"
    },
    {
      "cells": [
        "vítor",
        "https://www.linkedin.com/in/vítor-dias-6aa9a310b/"
      ],
      "line": 104,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3"
    },
    {
      "cells": [
        "pedro",
        "https://www.linkedin.com/in/pedrombjorge/"
      ],
      "line": 105,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8197102,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 96,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "some miriam of team have https://www.linkedin.com/in/miriammpereira/",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "the application show linkedin icon with miriam\u0027s https://www.linkedin.com/in/miriammpereira/",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 306277,
  "status": "passed"
});
formatter.before({
  "duration": 9000877,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 96,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "some vítor of team have https://www.linkedin.com/in/vítor-dias-6aa9a310b/",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "the application show linkedin icon with vítor\u0027s https://www.linkedin.com/in/vítor-dias-6aa9a310b/",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 300335,
  "status": "passed"
});
formatter.before({
  "duration": 8596289,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 96,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "some pedro of team have https://www.linkedin.com/in/pedrombjorge/",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "the application show linkedin icon with pedro\u0027s https://www.linkedin.com/in/pedrombjorge/",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 240377,
  "status": "passed"
});
formatter.before({
  "duration": 8021006,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 108,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "some member of team don\u0027t have linkedin link",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "the application show the disabled linkedin icon",
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 333826,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 113,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "some \u003cmember\u003e of team have \u003cprojects\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "the application show the \u003cmember\u003e\u0027s \u003cprojects\u003e.",
  "keyword": "Then "
});
formatter.examples({
  "line": 119,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;",
  "rows": [
    {
      "cells": [
        "member",
        "projects"
      ],
      "line": 120,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;1"
    },
    {
      "cells": [
        "miriam",
        "Irrigation4U, UCook, SIGOC"
      ],
      "line": 121,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;2"
    },
    {
      "cells": [
        "vítor",
        "Irrigation4U, UCook, Leilão de Artigos"
      ],
      "line": 122,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;3"
    },
    {
      "cells": [
        "pedro",
        "Irrigation4U, UCook, Leilão de Artigos"
      ],
      "line": 123,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10850964,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "some miriam of team have Irrigation4U, UCook, SIGOC",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "the application show the miriam\u0027s Irrigation4U, UCook, SIGOC.",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 549895,
  "status": "passed"
});
formatter.before({
  "duration": 9336864,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "some vítor of team have Irrigation4U, UCook, Leilão de Artigos",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "the application show the vítor\u0027s Irrigation4U, UCook, Leilão de Artigos.",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 311139,
  "status": "passed"
});
formatter.before({
  "duration": 7547816,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "some pedro of team have Irrigation4U, UCook, Leilão de Artigos",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "the application show the pedro\u0027s Irrigation4U, UCook, Leilão de Artigos.",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 304116,
  "status": "passed"
});
formatter.before({
  "duration": 10351846,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "An member don\u0027t have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-projects",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 126,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "some member of team don\u0027t have projects",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "the application don\u0027t show the projects section",
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 391624,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 131,
  "name": "An member have certificates",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 132,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "some \u003cmember\u003e of team have \u003ccertificates\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "the application show the \u003cmember\u003e\u0027s \u003ccertificates\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 137,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;",
  "rows": [
    {
      "cells": [
        "member",
        "certificates"
      ],
      "line": 138,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;1"
    },
    {
      "cells": [
        "miriam",
        "CodeSchool, EggHead"
      ],
      "line": 139,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;2"
    },
    {
      "cells": [
        "vítor",
        "CodeSchool, EggHead"
      ],
      "line": 140,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;3"
    },
    {
      "cells": [
        "pedro",
        "Marketing Digital, FPF"
      ],
      "line": 141,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6424799,
  "status": "passed"
});
formatter.scenario({
  "line": 139,
  "name": "An member have certificates",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 132,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "some miriam of team have CodeSchool, EggHead",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "the application show the miriam\u0027s CodeSchool, EggHead",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 241457,
  "status": "passed"
});
formatter.before({
  "duration": 6227637,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "An member have certificates",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 132,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "some vítor of team have CodeSchool, EggHead",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "the application show the vítor\u0027s CodeSchool, EggHead",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 323563,
  "status": "passed"
});
formatter.before({
  "duration": 5907855,
  "status": "passed"
});
formatter.scenario({
  "line": 141,
  "name": "An member have certificates",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-certificates;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 132,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "some pedro of team have Marketing Digital, FPF",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "the application show the pedro\u0027s Marketing Digital, FPF",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 576363,
  "status": "passed"
});
formatter.before({
  "duration": 5736621,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "An member don\u0027t have certificates",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-certificates",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 144,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "some member of team don\u0027t have certificates",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 147,
  "name": "the application don\u0027t show the certificates section",
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 260903,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 149,
  "name": "An member have languages",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 150,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "some \u003cmember\u003e of team have \u003clanguages\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "the application show the \u003cmember\u003e\u0027s \u003clanguages\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 155,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;",
  "rows": [
    {
      "cells": [
        "member",
        "languages"
      ],
      "line": 156,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;1"
    },
    {
      "cells": [
        "miriam",
        "Portuguese, English, Spanish"
      ],
      "line": 157,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;2"
    },
    {
      "cells": [
        "vítor",
        "Portuguese, English, Spanish, French"
      ],
      "line": 158,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;3"
    },
    {
      "cells": [
        "pedro",
        "Portuguese, English, Spanish"
      ],
      "line": 159,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5448169,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "An member have languages",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 150,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "some miriam of team have Portuguese, English, Spanish",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "the application show the miriam\u0027s Portuguese, English, Spanish",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 214989,
  "status": "passed"
});
formatter.before({
  "duration": 7841670,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "An member have languages",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 150,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "some vítor of team have Portuguese, English, Spanish, French",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "the application show the vítor\u0027s Portuguese, English, Spanish, French",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 279269,
  "status": "passed"
});
formatter.before({
  "duration": 5299083,
  "status": "passed"
});
formatter.scenario({
  "line": 159,
  "name": "An member have languages",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-languages;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 150,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "some pedro of team have Portuguese, English, Spanish",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "the application show the pedro\u0027s Portuguese, English, Spanish",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
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
formatter.before({
  "duration": 5533516,
  "status": "passed"
});
formatter.scenario({
  "line": 161,
  "name": "An member don\u0027t have languages",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-languages",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 162,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 163,
  "name": "some member of team don\u0027t have languages",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "the application don\u0027t show the languages section",
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 247939,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 167,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 168,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "some \u003cmember\u003e of team have \u003ctags\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "the application show the \u003cmember\u003e\u0027s \u003ctags\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 173,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;",
  "rows": [
    {
      "cells": [
        "member",
        "tags"
      ],
      "line": 174,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;1"
    },
    {
      "cells": [
        "miriam",
        "#PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP"
      ],
      "line": 175,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;2"
    },
    {
      "cells": [
        "vítor",
        "#PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL"
      ],
      "line": 176,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;3"
    },
    {
      "cells": [
        "pedro",
        "#PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS"
      ],
      "line": 177,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7258825,
  "status": "passed"
});
formatter.scenario({
  "line": 175,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 168,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "some miriam of team have #PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "the application show the miriam\u0027s #PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 511002,
  "status": "passed"
});
formatter.before({
  "duration": 7847611,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 168,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "some vítor of team have #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "the application show the vítor\u0027s #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 5360662,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 168,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "some pedro of team have #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "the application show the pedro\u0027s #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 292233,
  "status": "passed"
});
formatter.before({
  "duration": 7621819,
  "status": "passed"
});
formatter.scenario({
  "line": 179,
  "name": "An member don\u0027t have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 180,
  "name": "that I\u0027m in the detailed page",
  "keyword": "Given "
});
formatter.step({
  "line": 181,
  "name": "some member of team don\u0027t have tags",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "the application don\u0027t show the tags section",
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
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 230113,
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
  "duration": 5352559,
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
  "duration": 230653,
  "status": "passed"
});
formatter.before({
  "duration": 6560923,
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
  "duration": 243617,
  "status": "passed"
});
formatter.before({
  "duration": 5534057,
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
  "duration": 240916,
  "status": "passed"
});
formatter.before({
  "duration": 4707595,
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
  "duration": 224171,
  "status": "passed"
});
});