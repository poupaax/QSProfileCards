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
  "duration": 4150799130,
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
  "duration": 2502565814,
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
  "duration": 5552910335,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 146476137,
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
  "duration": 85025690,
  "status": "passed"
});
formatter.after({
  "duration": 10396681,
  "status": "passed"
});
formatter.before({
  "duration": 253554869,
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
  "duration": 1022948105,
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
  "duration": 5444046338,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 71362053,
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
  "duration": 64938334,
  "status": "passed"
});
formatter.after({
  "duration": 1347728,
  "status": "passed"
});
formatter.before({
  "duration": 44569548,
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
  "duration": 983512346,
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
  "duration": 4085117520,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 53402972,
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
  "duration": 43422224,
  "status": "passed"
});
formatter.after({
  "duration": 948541,
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
  "duration": 12332655,
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
  "duration": 1062951043,
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
  "duration": 58455196,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 43193732,
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
  "duration": 7371084297,
  "status": "passed"
});
formatter.after({
  "duration": 522346,
  "status": "passed"
});
formatter.before({
  "duration": 11300927,
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
  "duration": 1029101738,
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
  "duration": 29029895,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 45673659,
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
  "duration": 6181389040,
  "status": "passed"
});
formatter.after({
  "duration": 596349,
  "status": "passed"
});
formatter.before({
  "duration": 15496979,
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
  "duration": 315855005,
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
  "duration": 20777156,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 32975308,
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
  "duration": 3045479737,
  "status": "passed"
});
formatter.after({
  "duration": 696281,
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
  "duration": 15958826,
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
  "duration": 503725022,
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
  "duration": 24125679,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 47905647,
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
  "duration": 2972020198,
  "status": "passed"
});
formatter.after({
  "duration": 685478,
  "status": "passed"
});
formatter.before({
  "duration": 12641093,
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
  "duration": 1018682370,
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
  "duration": 12960334,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27616807,
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
  "duration": 7619612870,
  "status": "passed"
});
formatter.after({
  "duration": 729232,
  "status": "passed"
});
formatter.before({
  "duration": 7071385,
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
  "duration": 644782160,
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
  "duration": 12616245,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 28334695,
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
  "duration": 8512281878,
  "status": "passed"
});
formatter.after({
  "duration": 1303974,
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
  "duration": 15011905,
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
  "duration": 997223519,
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
  "duration": 23326765,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 26618570,
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
  "duration": 27293784,
  "status": "passed"
});
formatter.after({
  "duration": 4418062,
  "status": "passed"
});
formatter.before({
  "duration": 20872226,
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
  "duration": 959082011,
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
  "duration": 21673841,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 26703377,
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
  "duration": 23727032,
  "status": "passed"
});
formatter.after({
  "duration": 535850,
  "status": "passed"
});
formatter.before({
  "duration": 8851250,
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
  "duration": 1268945434,
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
  "duration": 17196899,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 29061225,
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
  "duration": 40376737,
  "status": "passed"
});
formatter.after({
  "duration": 1279666,
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
  "duration": 9925651,
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
  "duration": 557159865,
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
  "duration": 12329954,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 38045897,
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
  "duration": 438083385,
  "status": "passed"
});
formatter.after({
  "duration": 6014269,
  "status": "passed"
});
formatter.before({
  "duration": 9062457,
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
  "duration": 298193558,
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
  "duration": 14335071,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 33789886,
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
  "duration": 161269813,
  "status": "passed"
});
formatter.after({
  "duration": 9189938,
  "status": "passed"
});
formatter.before({
  "duration": 8944699,
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
  "duration": 417380233,
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
  "duration": 12721578,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 19872369,
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
  "duration": 160742066,
  "status": "passed"
});
formatter.after({
  "duration": 577443,
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
  "duration": 10921187,
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
  "duration": 287262109,
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
  "duration": 13502126,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27673525,
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
  "duration": 3514418797,
  "status": "passed"
});
formatter.after({
  "duration": 1188917,
  "status": "passed"
});
formatter.before({
  "duration": 8779947,
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
  "duration": 1000129641,
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
  "duration": 14315624,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 24034929,
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
  "duration": 5663854534,
  "status": "passed"
});
formatter.after({
  "duration": 548814,
  "status": "passed"
});
formatter.before({
  "duration": 10220044,
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
  "duration": 426410280,
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
  "duration": 13346557,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 22678019,
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
  "duration": 7217272631,
  "status": "passed"
});
formatter.after({
  "duration": 2105048,
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
  "duration": 10284324,
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
  "duration": 945663612,
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
  "duration": 13398413,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27916601,
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
  "duration": 4867193982,
  "status": "passed"
});
formatter.after({
  "duration": 838346,
  "status": "passed"
});
formatter.before({
  "duration": 8415332,
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
  "duration": 898716769,
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
  "duration": 9835983,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 24905145,
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
  "duration": 40449224422,
  "status": "passed"
});
formatter.after({
  "duration": 785950,
  "status": "passed"
});
formatter.before({
  "duration": 10603026,
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
  "duration": 653301204,
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
  "duration": 14353436,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31891724,
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
  "duration": 10528263392,
  "status": "passed"
});
formatter.after({
  "duration": 1481690,
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
  "duration": 19519636,
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
  "duration": 988861665,
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
  "duration": 25675430,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 29676480,
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
  "duration": 15395968,
  "status": "passed"
});
formatter.after({
  "duration": 1304514,
  "status": "passed"
});
formatter.before({
  "duration": 8726470,
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
  "duration": 1011391676,
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
  "duration": 16428775,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 18375013,
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
  "duration": 10698636,
  "status": "passed"
});
formatter.after({
  "duration": 1702081,
  "status": "passed"
});
formatter.before({
  "duration": 9062997,
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
  "duration": 874034714,
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
  "duration": 21446968,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 50167885,
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
  "duration": 16460645,
  "status": "passed"
});
formatter.after({
  "duration": 1989992,
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
  "duration": 12234884,
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
  "duration": 908020682,
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
  "duration": 9274204,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 18402562,
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
  "duration": 496696852,
  "status": "passed"
});
formatter.after({
  "duration": 555837,
  "status": "passed"
});
formatter.before({
  "duration": 5427643,
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
  "duration": 1025010480,
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
  "duration": 25961721,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 34586099,
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
  "duration": 440954937,
  "status": "passed"
});
formatter.after({
  "duration": 740575,
  "status": "passed"
});
formatter.before({
  "duration": 9052193,
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
  "duration": 998296299,
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
  "duration": 20151636,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 28074872,
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
  "duration": 450444669,
  "status": "passed"
});
formatter.after({
  "duration": 3927587,
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
  "duration": 8037211,
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
  "duration": 1019062111,
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
  "duration": 47089988,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 35692370,
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
  "duration": 21658175,
  "status": "passed"
});
formatter.after({
  "duration": 1166230,
  "status": "passed"
});
formatter.before({
  "duration": 7668275,
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
  "duration": 896604699,
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
  "duration": 11404641,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 21122865,
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
  "duration": 22783893,
  "status": "passed"
});
formatter.after({
  "duration": 4933386,
  "status": "passed"
});
formatter.before({
  "duration": 9935914,
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
  "duration": 2474577910,
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
  "duration": 10598705,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 17892100,
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
  "duration": 11969119,
  "status": "passed"
});
formatter.after({
  "duration": 3291805,
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
  "duration": 14161135,
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
  "duration": 952199686,
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
  "duration": 8204124,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 16050115,
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
  "duration": 502219024,
  "status": "passed"
});
formatter.after({
  "duration": 535850,
  "status": "passed"
});
formatter.before({
  "duration": 12820970,
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
  "duration": 491451786,
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
  "duration": 10437733,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 21536096,
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
  "duration": 453873137,
  "status": "passed"
});
formatter.after({
  "duration": 2453999,
  "status": "passed"
});
formatter.before({
  "duration": 8412630,
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
  "duration": 1203339449,
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
  "duration": 11854603,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 18367451,
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
  "duration": 184362684,
  "status": "passed"
});
formatter.after({
  "duration": 7970770,
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
  "duration": 9525384,
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
  "duration": 466728139,
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
  "duration": 4708875126,
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
  "duration": 1442645133,
  "status": "passed"
});
formatter.after({
  "duration": 520185,
  "status": "passed"
});
formatter.before({
  "duration": 7593191,
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
  "duration": 305118557,
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
  "duration": 2360691938,
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
  "duration": 3063516603,
  "status": "passed"
});
formatter.after({
  "duration": 544493,
  "status": "passed"
});
formatter.before({
  "duration": 6534994,
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
  "duration": 487937971,
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
  "duration": 3113335537,
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
  "duration": 3597458277,
  "status": "passed"
});
formatter.after({
  "duration": 667111,
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
  "duration": 7790893,
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
  "duration": 3197071298,
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
  "duration": 30488359,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 52721276,
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
  "duration": 9490913776,
  "status": "passed"
});
formatter.after({
  "duration": 904247,
  "status": "passed"
});
formatter.before({
  "duration": 10617070,
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
  "duration": 3029574928,
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
  "duration": 44046662,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 109787150,
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
  "duration": 4978918188,
  "status": "passed"
});
formatter.after({
  "duration": 4866945,
  "status": "passed"
});
formatter.before({
  "duration": 10468523,
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
  "duration": 1079470026,
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
  "duration": 52812564,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 59208735,
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
  "duration": 8013214754,
  "status": "passed"
});
formatter.after({
  "duration": 555837,
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
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the application show \"\u003cmembers\u003e\" default name \"\u003cdefault name\u003e\"",
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
        "Miriam Pereira",
        "User"
      ],
      "line": 37,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "User"
      ],
      "line": 38,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "User"
      ],
      "line": 39,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7779009,
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
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the application show \"Miriam Pereira\" default name \"User\"",
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
  "duration": 9176072672,
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
  "duration": 75596998,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 62098653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 22
    },
    {
      "val": "User",
      "offset": 52
    }
  ],
  "location": "Stepdefs.theApplicationShowDefaultName(String,String)"
});
formatter.result({
  "duration": 1983200668,
  "status": "passed"
});
formatter.after({
  "duration": 1030107,
  "status": "passed"
});
formatter.before({
  "duration": 13156416,
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
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the application show \"Vítor Dias\" default name \"User\"",
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
  "duration": 1440405043,
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
  "duration": 41137839,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 49193956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 22
    },
    {
      "val": "User",
      "offset": 48
    }
  ],
  "location": "Stepdefs.theApplicationShowDefaultName(String,String)"
});
formatter.result({
  "duration": 4489777255,
  "status": "passed"
});
formatter.after({
  "duration": 1099789,
  "status": "passed"
});
formatter.before({
  "duration": 15642285,
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
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the application show \"Pedro Jorge\" default name \"User\"",
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
  "duration": 2337920470,
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
  "duration": 56760679,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 103107390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 22
    },
    {
      "val": "User",
      "offset": 49
    }
  ],
  "location": "Stepdefs.theApplicationShowDefaultName(String,String)"
});
formatter.result({
  "duration": 3099311606,
  "status": "passed"
});
formatter.after({
  "duration": 1031187,
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
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the application show \"\u003cmembers\u003e\" photos \"\u003cphoto\u003e\"",
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
        "Miriam Pereira",
        "miriam.jpg"
      ],
      "line": 49,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "vítor.jpg"
      ],
      "line": 50,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "pedro.jpg"
      ],
      "line": 51,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7862196,
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
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show \"Miriam Pereira\" photos \"miriam.jpg\"",
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
  "duration": 3060944306,
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
  "duration": 75555405,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 63145505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 22
    },
    {
      "val": "miriam.jpg",
      "offset": 46
    }
  ],
  "location": "Stepdefs.theApplicationShowPhotos(String,String)"
});
formatter.result({
  "duration": 37167038,
  "status": "passed"
});
formatter.after({
  "duration": 1089526,
  "status": "passed"
});
formatter.before({
  "duration": 7646668,
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
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show \"Vítor Dias\" photos \"vítor.jpg\"",
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
  "duration": 2876664808,
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
  "duration": 45224236,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 62189941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 22
    },
    {
      "val": "vítor.jpg",
      "offset": 42
    }
  ],
  "location": "Stepdefs.theApplicationShowPhotos(String,String)"
});
formatter.result({
  "duration": 29631106,
  "status": "passed"
});
formatter.after({
  "duration": 1078722,
  "status": "passed"
});
formatter.before({
  "duration": 10613289,
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
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show \"Pedro Jorge\" photos \"pedro.jpg\"",
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
  "duration": 2410954893,
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
  "duration": 61715671,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 71305335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 22
    },
    {
      "val": "pedro.jpg",
      "offset": 43
    }
  ],
  "location": "Stepdefs.theApplicationShowPhotos(String,String)"
});
formatter.result({
  "duration": 31008003,
  "status": "passed"
});
formatter.after({
  "duration": 878860,
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
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the application show a \"\u003cmembers\u003e\" with default photo \"\u003cdefault photo\u003e\"",
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
        "Miriam Pereira",
        "default.jpg"
      ],
      "line": 61,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "default.jpg"
      ],
      "line": 62,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "default.jpg"
      ],
      "line": 63,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7572124,
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
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the application show a \"Miriam Pereira\" with default photo \"default.jpg\"",
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
  "duration": 2378337720,
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
  "duration": 46812880,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 61433702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 24
    },
    {
      "val": "default.jpg",
      "offset": 60
    }
  ],
  "location": "Stepdefs.theApplicationShowAWithDefaultPhoto(String,String)"
});
formatter.result({
  "duration": 4490797098,
  "status": "passed"
});
formatter.after({
  "duration": 1015522,
  "status": "passed"
});
formatter.before({
  "duration": 11473783,
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
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the application show a \"Vítor Dias\" with default photo \"default.jpg\"",
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
  "duration": 2446534368,
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
  "duration": 37474396,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 56780664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 24
    },
    {
      "val": "default.jpg",
      "offset": 56
    }
  ],
  "location": "Stepdefs.theApplicationShowAWithDefaultPhoto(String,String)"
});
formatter.result({
  "duration": 3070719249,
  "status": "passed"
});
formatter.after({
  "duration": 1034969,
  "status": "passed"
});
formatter.before({
  "duration": 13395713,
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
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "the application show a \"Pedro Jorge\" with default photo \"default.jpg\"",
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
  "duration": 4033848765,
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
  "duration": 37821186,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 57042107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 24
    },
    {
      "val": "default.jpg",
      "offset": 57
    }
  ],
  "location": "Stepdefs.theApplicationShowAWithDefaultPhoto(String,String)"
});
formatter.result({
  "duration": 2496492126,
  "status": "passed"
});
formatter.after({
  "duration": 1094927,
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
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "the application show members \"\u003cmembers\u003e\" short bio \"\u003cshort bio\u003e\"",
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
        "Miriam Pereira",
        "21 years old. Master\u0027s student. Front End Developer."
      ],
      "line": 73,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "22 years old. Master\u0027s student. Front End Developer."
      ],
      "line": 74,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "23 years old. Master\u0027s student."
      ],
      "line": 75,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11199375,
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
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show members \"Miriam Pereira\" short bio \"21 years old. Master\u0027s student. Front End Developer.\"",
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
  "duration": 2465698572,
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
  "duration": 64639619,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 51178006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 30
    },
    {
      "val": "21 years old. Master\u0027s student. Front End Developer.",
      "offset": 57
    }
  ],
  "location": "Stepdefs.theApplicationShowMembersShortBio(String,String)"
});
formatter.result({
  "duration": 4626978648,
  "status": "passed"
});
formatter.after({
  "duration": 1181895,
  "status": "passed"
});
formatter.before({
  "duration": 7084349,
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
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show members \"Vítor Dias\" short bio \"22 years old. Master\u0027s student. Front End Developer.\"",
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
  "duration": 1965494927,
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
  "duration": 98150237,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 54510324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 30
    },
    {
      "val": "22 years old. Master\u0027s student. Front End Developer.",
      "offset": 53
    }
  ],
  "location": "Stepdefs.theApplicationShowMembersShortBio(String,String)"
});
formatter.result({
  "duration": 8051244447,
  "status": "passed"
});
formatter.after({
  "duration": 781628,
  "status": "passed"
});
formatter.before({
  "duration": 7979954,
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
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show members \"Pedro Jorge\" short bio \"23 years old. Master\u0027s student.\"",
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
  "duration": 1691904018,
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
  "duration": 63894183,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 58357425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 30
    },
    {
      "val": "23 years old. Master\u0027s student.",
      "offset": 54
    }
  ],
  "location": "Stepdefs.theApplicationShowMembersShortBio(String,String)"
});
formatter.result({
  "duration": 4404197888,
  "status": "passed"
});
formatter.after({
  "duration": 701142,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 77,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the application show \"\u003cmembers\u003e\" short bio message \"\u003cmsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 83,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;",
  "rows": [
    {
      "cells": [
        "members",
        "msg"
      ],
      "line": 84,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "The user don\u0027t have information."
      ],
      "line": 85,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "The user don\u0027t have information."
      ],
      "line": 86,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "The user don\u0027t have information."
      ],
      "line": 87,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6911494,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the application show \"Miriam Pereira\" short bio message \"The user don\u0027t have information.\"",
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
  "duration": 893948135,
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
  "duration": 45826527,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 44512290,
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
      "offset": 57
    }
  ],
  "location": "Stepdefs.theApplicationShowShortBioMessage(String,String)"
});
formatter.result({
  "duration": 7629490986,
  "status": "passed"
});
formatter.after({
  "duration": 785409,
  "status": "passed"
});
formatter.before({
  "duration": 8163612,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the application show \"Vítor Dias\" short bio message \"The user don\u0027t have information.\"",
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
  "duration": 3082792622,
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
  "duration": 28079194,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 56641300,
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
      "offset": 53
    }
  ],
  "location": "Stepdefs.theApplicationShowShortBioMessage(String,String)"
});
formatter.result({
  "duration": 11240826268,
  "status": "passed"
});
formatter.after({
  "duration": 638482,
  "status": "passed"
});
formatter.before({
  "duration": 11243669,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "the application show \"Pedro Jorge\" short bio message \"The user don\u0027t have information.\"",
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
  "duration": 702020349,
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
  "duration": 25614931,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 44240584,
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
      "offset": 54
    }
  ],
  "location": "Stepdefs.theApplicationShowShortBioMessage(String,String)"
});
formatter.result({
  "duration": 7258582785,
  "status": "passed"
});
formatter.after({
  "duration": 695201,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "the application show facebook icon with \"\u003cmembers\u003e\" facebook link \"\u003cfacebook link\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 95,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;",
  "rows": [
    {
      "cells": [
        "members",
        "facebook link"
      ],
      "line": 96,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "https://www.facebook.com/miriampereira95"
      ],
      "line": 97,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "https://www.facebook.com/vitor.dias.3954"
      ],
      "line": 98,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "https://www.facebook.com/pedrombjorge"
      ],
      "line": 99,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8244637,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "the application show facebook icon with \"Miriam Pereira\" facebook link \"https://www.facebook.com/miriampereira95\"",
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
  "duration": 2547817059,
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
  "duration": 64918348,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 54102494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 41
    },
    {
      "val": "https://www.facebook.com/miriampereira95",
      "offset": 72
    }
  ],
  "location": "Stepdefs.theApplicationShowFacebookIconWithFacebookLink(String,String)"
});
formatter.result({
  "duration": 23412112,
  "status": "passed"
});
formatter.after({
  "duration": 772985,
  "status": "passed"
});
formatter.before({
  "duration": 5841414,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "the application show facebook icon with \"Vítor Dias\" facebook link \"https://www.facebook.com/vitor.dias.3954\"",
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
  "duration": 5461895224,
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
  "duration": 95840463,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 43801964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 41
    },
    {
      "val": "https://www.facebook.com/vitor.dias.3954",
      "offset": 68
    }
  ],
  "location": "Stepdefs.theApplicationShowFacebookIconWithFacebookLink(String,String)"
});
formatter.result({
  "duration": 28912138,
  "status": "passed"
});
formatter.after({
  "duration": 911269,
  "status": "passed"
});
formatter.before({
  "duration": 7743358,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "the application show facebook icon with \"Pedro Jorge\" facebook link \"https://www.facebook.com/pedrombjorge\"",
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
  "duration": 1362005635,
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
  "duration": 51661460,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 53355438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 41
    },
    {
      "val": "https://www.facebook.com/pedrombjorge",
      "offset": 69
    }
  ],
  "location": "Stepdefs.theApplicationShowFacebookIconWithFacebookLink(String,String)"
});
formatter.result({
  "duration": 32881858,
  "status": "passed"
});
formatter.after({
  "duration": 834565,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 101,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link",
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
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "the application show the \"\u003cmembers\u003e\" facebook default \"\u003cface link\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 107,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;",
  "rows": [
    {
      "cells": [
        "members",
        "face link"
      ],
      "line": 108,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "https://www.facebook.com/"
      ],
      "line": 109,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "https://www.facebook.com/"
      ],
      "line": 110,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "https://www.facebook.com/"
      ],
      "line": 111,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5572409,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show the \"Miriam Pereira\" facebook default \"https://www.facebook.com/\"",
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
  "duration": 1476335088,
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
  "duration": 38516927,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 41874632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 26
    },
    {
      "val": "https://www.facebook.com/",
      "offset": 60
    }
  ],
  "location": "Stepdefs.theApplicationShowTheFacebookDefault(String,String)"
});
formatter.result({
  "duration": 1569428239,
  "status": "passed"
});
formatter.after({
  "duration": 1103030,
  "status": "passed"
});
formatter.before({
  "duration": 24530807,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show the \"Vítor Dias\" facebook default \"https://www.facebook.com/\"",
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
  "duration": 1798985450,
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
  "duration": 60333913,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 76651413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 26
    },
    {
      "val": "https://www.facebook.com/",
      "offset": 56
    }
  ],
  "location": "Stepdefs.theApplicationShowTheFacebookDefault(String,String)"
});
formatter.result({
  "duration": 3447026464,
  "status": "passed"
});
formatter.after({
  "duration": 1443338,
  "status": "passed"
});
formatter.before({
  "duration": 11570473,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show the \"Pedro Jorge\" facebook default \"https://www.facebook.com/\"",
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
  "duration": 5227159929,
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
  "duration": 37379866,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 44893110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 26
    },
    {
      "val": "https://www.facebook.com/",
      "offset": 57
    }
  ],
  "location": "Stepdefs.theApplicationShowTheFacebookDefault(String,String)"
});
formatter.result({
  "duration": 2699698152,
  "status": "passed"
});
formatter.after({
  "duration": 734633,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 113,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "the application show linkedin icon with \"\u003cmembers\u003e\" linkedin link \"\u003clinkedin link\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 119,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;",
  "rows": [
    {
      "cells": [
        "members",
        "linkedin link"
      ],
      "line": 120,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "https://www.linkedin.com/in/miriammpereira/"
      ],
      "line": 121,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "https://www.linkedin.com/in/vitor-dias-6aa9a310b/"
      ],
      "line": 122,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "https://www.linkedin.com/in/pedrombjorge/"
      ],
      "line": 123,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5091116,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "the application show linkedin icon with \"Miriam Pereira\" linkedin link \"https://www.linkedin.com/in/miriammpereira/\"",
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
  "duration": 1016492516,
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
  "duration": 45819505,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 65530362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 41
    },
    {
      "val": "https://www.linkedin.com/in/miriammpereira/",
      "offset": 72
    }
  ],
  "location": "Stepdefs.theApplicationShowLinkedinIconWithLinkedinLink(String,String)"
});
formatter.result({
  "duration": 41984828,
  "status": "passed"
});
formatter.after({
  "duration": 690339,
  "status": "passed"
});
formatter.before({
  "duration": 10569535,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "the application show linkedin icon with \"Vítor Dias\" linkedin link \"https://www.linkedin.com/in/vitor-dias-6aa9a310b/\"",
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
  "duration": 2017853747,
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
  "duration": 52114663,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 64131318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 41
    },
    {
      "val": "https://www.linkedin.com/in/vitor-dias-6aa9a310b/",
      "offset": 68
    }
  ],
  "location": "Stepdefs.theApplicationShowLinkedinIconWithLinkedinLink(String,String)"
});
formatter.result({
  "duration": 29538737,
  "status": "passed"
});
formatter.after({
  "duration": 792972,
  "status": "passed"
});
formatter.before({
  "duration": 6409675,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "the application show linkedin icon with \"Pedro Jorge\" linkedin link \"https://www.linkedin.com/in/pedrombjorge/\"",
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
  "duration": 1960531291,
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
  "duration": 33493872,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 43610744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 41
    },
    {
      "val": "https://www.linkedin.com/in/pedrombjorge/",
      "offset": 69
    }
  ],
  "location": "Stepdefs.theApplicationShowLinkedinIconWithLinkedinLink(String,String)"
});
formatter.result({
  "duration": 33716423,
  "status": "passed"
});
formatter.after({
  "duration": 753539,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 125,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 126,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "the application show the \"\u003cmembers\u003e\" linkedin default \"\u003clinkedin link\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 131,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;",
  "rows": [
    {
      "cells": [
        "members",
        "linkedin link"
      ],
      "line": 132,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "https://www.linkedin.com/"
      ],
      "line": 133,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "https://www.linkedin.com/"
      ],
      "line": 134,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "https://www.linkedin.com/"
      ],
      "line": 135,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6013189,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 126,
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "the application show the \"Miriam Pereira\" linkedin default \"https://www.linkedin.com/\"",
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
  "duration": 1851201666,
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
  "duration": 54709107,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 80259217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 26
    },
    {
      "val": "https://www.linkedin.com/",
      "offset": 60
    }
  ],
  "location": "Stepdefs.theApplicationShowTheLinkedinDefault(String,String)"
});
formatter.result({
  "duration": 2420280414,
  "status": "passed"
});
formatter.after({
  "duration": 2553931,
  "status": "passed"
});
formatter.before({
  "duration": 15561800,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 126,
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "the application show the \"Vítor Dias\" linkedin default \"https://www.linkedin.com/\"",
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
  "duration": 4578836405,
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
  "duration": 51749507,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 61446126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 26
    },
    {
      "val": "https://www.linkedin.com/",
      "offset": 56
    }
  ],
  "location": "Stepdefs.theApplicationShowTheLinkedinDefault(String,String)"
});
formatter.result({
  "duration": 1425704275,
  "status": "passed"
});
formatter.after({
  "duration": 1215386,
  "status": "passed"
});
formatter.before({
  "duration": 13411917,
  "status": "passed"
});
formatter.scenario({
  "line": 135,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 126,
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "the application show the \"Pedro Jorge\" linkedin default \"https://www.linkedin.com/\"",
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
  "duration": 2030946424,
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
  "duration": 73457918,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 122368285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 26
    },
    {
      "val": "https://www.linkedin.com/",
      "offset": 57
    }
  ],
  "location": "Stepdefs.theApplicationShowTheLinkedinDefault(String,String)"
});
formatter.result({
  "duration": 4422053797,
  "status": "passed"
});
formatter.after({
  "duration": 567180,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 137,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects",
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
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "the application show the \"\u003cmembers\u003e\" projects \"\u003cprojects\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 143,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;",
  "rows": [
    {
      "cells": [
        "members",
        "projects"
      ],
      "line": 144,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "Irrigation4U"
      ],
      "line": 145,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "Online Auctions Website, Irrigation4U"
      ],
      "line": 146,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "Online Auctions Website, Irrigation4U"
      ],
      "line": 147,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7023310,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show the \"Miriam Pereira\" projects \"Irrigation4U\"",
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
  "duration": 2526749291,
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
  "duration": 46387225,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 72804852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 26
    },
    {
      "val": "Irrigation4U",
      "offset": 52
    }
  ],
  "location": "Stepdefs.theApplicationShowTheProjects(String,String)"
});
formatter.result({
  "duration": 87507,
  "status": "passed"
});
formatter.after({
  "duration": 776227,
  "status": "passed"
});
formatter.before({
  "duration": 12831773,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show the \"Vítor Dias\" projects \"Online Auctions Website, Irrigation4U\"",
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
  "duration": 4420134027,
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
  "duration": 83691467,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 102714686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 26
    },
    {
      "val": "Online Auctions Website, Irrigation4U",
      "offset": 48
    }
  ],
  "location": "Stepdefs.theApplicationShowTheProjects(String,String)"
});
formatter.result({
  "duration": 237136,
  "status": "passed"
});
formatter.after({
  "duration": 5402255,
  "status": "passed"
});
formatter.before({
  "duration": 13523733,
  "status": "passed"
});
formatter.scenario({
  "line": 147,
  "name": "An member have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-projects;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show the \"Pedro Jorge\" projects \"Online Auctions Website, Irrigation4U\"",
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
  "duration": 4956555089,
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
  "duration": 66512934,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 106081574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 26
    },
    {
      "val": "Online Auctions Website, Irrigation4U",
      "offset": 49
    }
  ],
  "location": "Stepdefs.theApplicationShowTheProjects(String,String)"
});
formatter.result({
  "duration": 110195,
  "status": "passed"
});
formatter.after({
  "duration": 1759878,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 149,
  "name": "An member don\u0027t have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-projects",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 150,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "the application show the \"\u003cmembers\u003e\" projects default \"\u003cmsg projects\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 155,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-projects;",
  "rows": [
    {
      "cells": [
        "members",
        "msg projects"
      ],
      "line": 156,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-projects;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "The user don\u0027t have information."
      ],
      "line": 157,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-projects;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "The user don\u0027t have information."
      ],
      "line": 158,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-projects;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "The user don\u0027t have information."
      ],
      "line": 159,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-projects;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11172907,
  "status": "passed"
});
formatter.scenario({
  "line": 157,
  "name": "An member don\u0027t have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-projects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 150,
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "the application show the \"Miriam Pereira\" projects default \"The user don\u0027t have information.\"",
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
  "duration": 1847899057,
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
  "duration": 78778608,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 46858254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 26
    },
    {
      "val": "The user don\u0027t have information.",
      "offset": 60
    }
  ],
  "location": "Stepdefs.theApplicationShowTheProjectsDefault(String,String)"
});
formatter.result({
  "duration": 7555981751,
  "status": "passed"
});
formatter.after({
  "duration": 1185137,
  "status": "passed"
});
formatter.before({
  "duration": 12945749,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "An member don\u0027t have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-projects;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 150,
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "the application show the \"Vítor Dias\" projects default \"The user don\u0027t have information.\"",
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
  "duration": 2015399749,
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
  "duration": 65325097,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 66404360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 26
    },
    {
      "val": "The user don\u0027t have information.",
      "offset": 56
    }
  ],
  "location": "Stepdefs.theApplicationShowTheProjectsDefault(String,String)"
});
formatter.result({
  "duration": 15226872018,
  "status": "passed"
});
formatter.after({
  "duration": 760021,
  "status": "passed"
});
formatter.before({
  "duration": 17599867,
  "status": "passed"
});
formatter.scenario({
  "line": 159,
  "name": "An member don\u0027t have projects",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-projects;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 150,
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "the application show the \"Pedro Jorge\" projects default \"The user don\u0027t have information.\"",
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
  "duration": 6085656070,
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
  "duration": 41874093,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 138161818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 26
    },
    {
      "val": "The user don\u0027t have information.",
      "offset": 57
    }
  ],
  "location": "Stepdefs.theApplicationShowTheProjectsDefault(String,String)"
});
formatter.result({
  "duration": 8528660958,
  "status": "passed"
});
formatter.after({
  "duration": 1043611,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 161,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 162,
  "name": "that I\u0027m in the detailed page of \"\u003cmembers\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 163,
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "the application show the \"\u003cmembers\u003e\" tags \"\u003ctags\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 167,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;",
  "rows": [
    {
      "cells": [
        "members",
        "tags"
      ],
      "line": 168,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "#PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP"
      ],
      "line": 169,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "#PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL"
      ],
      "line": 170,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "#PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS"
      ],
      "line": 171,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13693347,
  "status": "passed"
});
formatter.scenario({
  "line": 169,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 162,
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 163,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "the application show the \"Miriam Pereira\" tags \"#PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP\"",
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
  "duration": 5490757126,
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
  "duration": 33368553,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 47812198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 26
    },
    {
      "val": "#PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP",
      "offset": 48
    }
  ],
  "location": "Stepdefs.theApplicationShowTheTags(String,String)"
});
formatter.result({
  "duration": 80485,
  "status": "passed"
});
formatter.after({
  "duration": 515324,
  "status": "passed"
});
formatter.before({
  "duration": 6746201,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 162,
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 163,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "the application show the \"Vítor Dias\" tags \"#PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL\"",
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
  "duration": 4618788569,
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
  "duration": 58888414,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 92194306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 26
    },
    {
      "val": "#PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL",
      "offset": 44
    }
  ],
  "location": "Stepdefs.theApplicationShowTheTags(String,String)"
});
formatter.result({
  "duration": 151788,
  "status": "passed"
});
formatter.after({
  "duration": 1287769,
  "status": "passed"
});
formatter.before({
  "duration": 22431700,
  "status": "passed"
});
formatter.scenario({
  "line": 171,
  "name": "An member have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-have-tags;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 162,
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 163,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "the application show the \"Pedro Jorge\" tags \"#PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS\"",
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
  "duration": 1874483056,
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
  "duration": 62155370,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 66375730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 26
    },
    {
      "val": "#PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS",
      "offset": 45
    }
  ],
  "location": "Stepdefs.theApplicationShowTheTags(String,String)"
});
formatter.result({
  "duration": 75084,
  "status": "passed"
});
formatter.after({
  "duration": 787570,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 173,
  "name": "An member don\u0027t have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags",
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
  "name": "exists \"\u003cmembers\u003e\" on detailed page",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the detailed page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "the application show the \"\u003cmembers\u003e\" tags default \"\u003cmsg tags\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 179,
  "name": "",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags;",
  "rows": [
    {
      "cells": [
        "members",
        "msg tags"
      ],
      "line": 180,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "The user don\u0027t have tags."
      ],
      "line": 181,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "The user don\u0027t have tags."
      ],
      "line": 182,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "The user don\u0027t have tags."
      ],
      "line": 183,
      "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 55730572,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "An member don\u0027t have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 174,
  "name": "that I\u0027m in the detailed page of \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "exists \"Miriam Pereira\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show the \"Miriam Pereira\" tags default \"The user don\u0027t have tags.\"",
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
  "duration": 1476689440,
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
  "duration": 65610848,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 74347581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 26
    },
    {
      "val": "The user don\u0027t have tags.",
      "offset": 56
    }
  ],
  "location": "Stepdefs.theApplicationShowTheTagsDefault(String,String)"
});
formatter.result({
  "duration": 7395779857,
  "status": "passed"
});
formatter.after({
  "duration": 1031727,
  "status": "passed"
});
formatter.before({
  "duration": 13189367,
  "status": "passed"
});
formatter.scenario({
  "line": 182,
  "name": "An member don\u0027t have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 174,
  "name": "that I\u0027m in the detailed page of \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "exists \"Vítor Dias\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show the \"Vítor Dias\" tags default \"The user don\u0027t have tags.\"",
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
  "duration": 2030408953,
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
  "duration": 44256249,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 56659666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 26
    },
    {
      "val": "The user don\u0027t have tags.",
      "offset": 52
    }
  ],
  "location": "Stepdefs.theApplicationShowTheTagsDefault(String,String)"
});
formatter.result({
  "duration": 6361483830,
  "status": "passed"
});
formatter.after({
  "duration": 980412,
  "status": "passed"
});
formatter.before({
  "duration": 12544402,
  "status": "passed"
});
formatter.scenario({
  "line": 183,
  "name": "An member don\u0027t have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 174,
  "name": "that I\u0027m in the detailed page of \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "exists \"Pedro Jorge\" on detailed page",
  "matchedColumns": [
    0
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
  "name": "the application show the \"Pedro Jorge\" tags default \"The user don\u0027t have tags.\"",
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
  "duration": 1957326994,
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
  "duration": 100868379,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 55336786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 26
    },
    {
      "val": "The user don\u0027t have tags.",
      "offset": 53
    }
  ],
  "location": "Stepdefs.theApplicationShowTheTagsDefault(String,String)"
});
formatter.result({
  "duration": 7754099361,
  "status": "passed"
});
formatter.after({
  "duration": 1348268,
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
  "duration": 11212340,
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
  "duration": 353813,
  "status": "passed"
});
formatter.before({
  "duration": 8344569,
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
  "duration": 1168391,
  "status": "passed"
});
formatter.before({
  "duration": 11615307,
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
  "duration": 7853553,
  "status": "passed"
});
formatter.before({
  "duration": 8833964,
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
  "duration": 281429,
  "status": "passed"
});
});