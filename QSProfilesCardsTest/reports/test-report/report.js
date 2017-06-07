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
  "duration": 3496653637,
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
  "duration": 345622774,
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
  "duration": 1319491979,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 108751102,
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
  "duration": 356378669,
  "status": "passed"
});
formatter.after({
  "duration": 926934,
  "status": "passed"
});
formatter.before({
  "duration": 298778564,
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
  "duration": 50247830,
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
  "duration": 328898525,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 64824358,
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
  "duration": 338589202,
  "status": "passed"
});
formatter.after({
  "duration": 1969465,
  "status": "passed"
});
formatter.before({
  "duration": 11648257,
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
  "duration": 27155501,
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
  "duration": 304900868,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 52049303,
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
  "duration": 227354392,
  "status": "passed"
});
formatter.after({
  "duration": 790270,
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
  "duration": 8943079,
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
  "duration": 13810024,
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
  "duration": 20633470,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 40695439,
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
  "duration": 227513202,
  "status": "passed"
});
formatter.after({
  "duration": 377580,
  "status": "passed"
});
formatter.before({
  "duration": 11798426,
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
  "duration": 13586393,
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
  "duration": 18134097,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 33184894,
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
  "duration": 223547263,
  "status": "passed"
});
formatter.after({
  "duration": 646045,
  "status": "passed"
});
formatter.before({
  "duration": 9592365,
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
  "duration": 13122385,
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
  "duration": 14704008,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 26813032,
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
  "duration": 203793732,
  "status": "passed"
});
formatter.after({
  "duration": 301956,
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
  "duration": 10387497,
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
  "duration": 14228116,
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
  "duration": 18669946,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 35816069,
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
  "duration": 246475921,
  "status": "passed"
});
formatter.after({
  "duration": 1144624,
  "status": "passed"
});
formatter.before({
  "duration": 14721293,
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
  "duration": 16200282,
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
  "duration": 21430762,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 36368125,
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
  "duration": 213060374,
  "status": "passed"
});
formatter.after({
  "duration": 288992,
  "status": "passed"
});
formatter.before({
  "duration": 35641594,
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
  "duration": 10734828,
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
  "duration": 17487512,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 33782864,
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
  "duration": 188951981,
  "status": "passed"
});
formatter.after({
  "duration": 313839,
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
  "duration": 7388466,
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
  "duration": 9355770,
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
  "duration": 17540988,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 21226578,
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
  "duration": 19402419,
  "status": "passed"
});
formatter.after({
  "duration": 365156,
  "status": "passed"
});
formatter.before({
  "duration": 11031382,
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
  "duration": 12514693,
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
  "duration": 25217365,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 30773568,
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
  "duration": 21779173,
  "status": "passed"
});
formatter.after({
  "duration": 557457,
  "status": "passed"
});
formatter.before({
  "duration": 8037211,
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
  "duration": 9040850,
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
  "duration": 10566834,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 17678191,
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
  "duration": 16325602,
  "status": "passed"
});
formatter.after({
  "duration": 695201,
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
  "duration": 13620964,
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
  "duration": 14906032,
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
  "duration": 19935568,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 28096479,
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
  "duration": 16530328,
  "status": "passed"
});
formatter.after({
  "duration": 9325520,
  "status": "passed"
});
formatter.before({
  "duration": 10232468,
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
  "duration": 14966531,
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
  "duration": 17364352,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31103614,
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
  "duration": 16947879,
  "status": "passed"
});
formatter.after({
  "duration": 351112,
  "status": "passed"
});
formatter.before({
  "duration": 18239970,
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
  "duration": 13872683,
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
  "duration": 18042808,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 23646546,
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
  "duration": 18815793,
  "status": "passed"
});
formatter.after({
  "duration": 809177,
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
  "duration": 26946454,
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
  "duration": 13243384,
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
  "duration": 20040362,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31587067,
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
  "duration": 256633306,
  "status": "passed"
});
formatter.after({
  "duration": 1364474,
  "status": "passed"
});
formatter.before({
  "duration": 10135238,
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
  "duration": 11242049,
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
  "duration": 23368899,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 28480541,
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
  "duration": 271832650,
  "status": "passed"
});
formatter.after({
  "duration": 346250,
  "status": "passed"
});
formatter.before({
  "duration": 15266326,
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
  "duration": 14950326,
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
  "duration": 18312894,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31187880,
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
  "duration": 251155967,
  "status": "passed"
});
formatter.after({
  "duration": 537470,
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
  "duration": 9831120,
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
  "duration": 11115108,
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
  "duration": 15102114,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 19531520,
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
  "duration": 258643824,
  "status": "passed"
});
formatter.after({
  "duration": 285211,
  "status": "passed"
});
formatter.before({
  "duration": 9263400,
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
  "duration": 11746028,
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
  "duration": 14228117,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 26814652,
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
  "duration": 303883725,
  "status": "passed"
});
formatter.after({
  "duration": 562318,
  "status": "passed"
});
formatter.before({
  "duration": 12891733,
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
  "duration": 14715892,
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
  "duration": 16052275,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 35822011,
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
  "duration": 238765514,
  "status": "passed"
});
formatter.after({
  "duration": 1068459,
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
  "duration": 15750320,
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
  "duration": 22383086,
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
  "duration": 19468860,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 22653711,
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
  "duration": 22576467,
  "status": "passed"
});
formatter.after({
  "duration": 760561,
  "status": "passed"
});
formatter.before({
  "duration": 15144247,
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
  "duration": 14389087,
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
  "duration": 24731751,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 25919588,
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
  "duration": 14704548,
  "status": "passed"
});
formatter.after({
  "duration": 706005,
  "status": "passed"
});
formatter.before({
  "duration": 10947655,
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
  "duration": 10526322,
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
  "duration": 12156019,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 23878280,
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
  "duration": 14923317,
  "status": "passed"
});
formatter.after({
  "duration": 663871,
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
  "duration": 11638535,
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
  "duration": 10628414,
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
  "duration": 15410012,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31621638,
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
  "duration": 18667246,
  "status": "passed"
});
formatter.after({
  "duration": 330585,
  "status": "passed"
});
formatter.before({
  "duration": 10025042,
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
  "duration": 13010030,
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
  "duration": 13960192,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 34009736,
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
  "duration": 17899122,
  "status": "passed"
});
formatter.after({
  "duration": 1070079,
  "status": "passed"
});
formatter.before({
  "duration": 12625428,
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
  "duration": 8091229,
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
  "duration": 16126820,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 24360653,
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
  "duration": 15346271,
  "status": "passed"
});
formatter.after({
  "duration": 1241854,
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
  "duration": 9485411,
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
  "duration": 11393297,
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
  "duration": 15258224,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 25411286,
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
  "duration": 15138305,
  "status": "passed"
});
formatter.after({
  "duration": 782708,
  "status": "passed"
});
formatter.before({
  "duration": 10771559,
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
  "duration": 19863726,
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
  "duration": 20186748,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 23920953,
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
  "duration": 19829155,
  "status": "passed"
});
formatter.after({
  "duration": 737334,
  "status": "passed"
});
formatter.before({
  "duration": 12509291,
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
  "duration": 10893098,
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
  "duration": 13657155,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 21558244,
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
  "duration": 16368816,
  "status": "passed"
});
formatter.after({
  "duration": 458065,
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
  "duration": 7071925,
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
  "duration": 11406801,
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
  "duration": 33619192,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 33980027,
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
  "duration": 19873989,
  "status": "passed"
});
formatter.after({
  "duration": 2475606,
  "status": "passed"
});
formatter.before({
  "duration": 10644619,
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
  "duration": 15941000,
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
  "duration": 23656270,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 38189583,
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
  "duration": 33003396,
  "status": "passed"
});
formatter.after({
  "duration": 337067,
  "status": "passed"
});
formatter.before({
  "duration": 6744581,
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
  "duration": 10109849,
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
  "duration": 12525497,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 17423231,
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
  "duration": 17502096,
  "status": "passed"
});
formatter.after({
  "duration": 826462,
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
  "duration": 20104101,
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
  "duration": 12684847,
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
  "duration": 226435560,
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
  "duration": 59092599,
  "status": "passed"
});
formatter.after({
  "duration": 619577,
  "status": "passed"
});
formatter.before({
  "duration": 13813265,
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
  "duration": 10050970,
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
  "duration": 191760872,
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
  "duration": 33737490,
  "status": "passed"
});
formatter.after({
  "duration": 783249,
  "status": "passed"
});
formatter.before({
  "duration": 7753081,
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
  "duration": 13953709,
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
  "duration": 203558757,
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
  "duration": 34209599,
  "status": "passed"
});
formatter.after({
  "duration": 277648,
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
  "duration": 11036784,
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
  "duration": 40960663,
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
  "duration": 45444626,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 75234542,
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
  "duration": 286705192,
  "status": "passed"
});
formatter.after({
  "duration": 321942,
  "status": "passed"
});
formatter.before({
  "duration": 10768858,
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
  "duration": 76337032,
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
  "duration": 46556839,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 78834785,
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
  "duration": 235055616,
  "status": "passed"
});
formatter.after({
  "duration": 629840,
  "status": "passed"
});
formatter.before({
  "duration": 9104050,
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
  "duration": 28713895,
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
  "duration": 52461994,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 63079064,
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
  "duration": 224379127,
  "status": "passed"
});
formatter.after({
  "duration": 224172,
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
  "duration": 7055719,
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
  "duration": 26425188,
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
  "duration": 37833070,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 70549095,
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
  "duration": 33364771,
  "status": "passed"
});
formatter.after({
  "duration": 240916,
  "status": "passed"
});
formatter.before({
  "duration": 7834647,
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
  "duration": 27916602,
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
  "duration": 29812603,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 51786779,
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
  "duration": 23544994,
  "status": "passed"
});
formatter.after({
  "duration": 226332,
  "status": "passed"
});
formatter.before({
  "duration": 5174303,
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
  "duration": 29886607,
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
  "duration": 50473082,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 51826212,
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
  "duration": 24329323,
  "status": "passed"
});
formatter.after({
  "duration": 229033,
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
  "duration": 7462469,
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
  "duration": 25968203,
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
  "duration": 30773028,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 56088705,
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
  "duration": 34479145,
  "status": "passed"
});
formatter.after({
  "duration": 254961,
  "status": "passed"
});
formatter.before({
  "duration": 10157385,
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
  "duration": 38695184,
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
  "duration": 34237148,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 73474123,
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
  "duration": 30372221,
  "status": "passed"
});
formatter.after({
  "duration": 273867,
  "status": "passed"
});
formatter.before({
  "duration": 7872459,
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
  "duration": 39915971,
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
  "duration": 37500864,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 74072633,
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
  "duration": 31060940,
  "status": "passed"
});
formatter.after({
  "duration": 229032,
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
  "duration": 7470572,
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
  "duration": 26404662,
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
  "duration": 89130454,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 55933675,
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
  "duration": 38933939,
  "status": "passed"
});
formatter.after({
  "duration": 277108,
  "status": "passed"
});
formatter.before({
  "duration": 8297574,
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
  "duration": 40235212,
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
  "duration": 49828117,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 70479953,
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
  "duration": 38863717,
  "status": "passed"
});
formatter.after({
  "duration": 247398,
  "status": "passed"
});
formatter.before({
  "duration": 7265847,
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
  "duration": 30065944,
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
  "duration": 40079643,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 72886958,
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
  "duration": 33074699,
  "status": "passed"
});
formatter.after({
  "duration": 290072,
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
  "duration": 6958489,
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
  "duration": 35511953,
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
  "duration": 38372701,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 53785414,
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
  "duration": 169444228,
  "status": "passed"
});
formatter.after({
  "duration": 248479,
  "status": "passed"
});
formatter.before({
  "duration": 8832344,
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
  "duration": 24756059,
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
  "duration": 29933062,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 67950871,
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
  "duration": 165673831,
  "status": "passed"
});
formatter.after({
  "duration": 267925,
  "status": "passed"
});
formatter.before({
  "duration": 5998604,
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
  "duration": 29197348,
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
  "duration": 47095930,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 69192724,
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
  "duration": 168899735,
  "status": "passed"
});
formatter.after({
  "duration": 255501,
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
  "duration": 5092196,
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
  "duration": 23017246,
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
  "duration": 28085675,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 45428961,
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
  "duration": 458090256,
  "status": "passed"
});
formatter.after({
  "duration": 244158,
  "status": "passed"
});
formatter.before({
  "duration": 6057483,
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
  "duration": 28330913,
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
  "duration": 26904321,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 46227334,
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
  "duration": 434732701,
  "status": "passed"
});
formatter.after({
  "duration": 273327,
  "status": "passed"
});
formatter.before({
  "duration": 7376042,
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
  "duration": 25255177,
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
  "duration": 30611517,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 54538953,
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
  "duration": 459920897,
  "status": "passed"
});
formatter.after({
  "duration": 220930,
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
  "duration": 8295953,
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
  "duration": 34254974,
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
  "duration": 47569660,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 59639792,
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
  "duration": 25417229,
  "status": "passed"
});
formatter.after({
  "duration": 204185,
  "status": "passed"
});
formatter.before({
  "duration": 5450871,
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
  "duration": 28516193,
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
  "duration": 26963200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 47255821,
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
  "duration": 26795206,
  "status": "passed"
});
formatter.after({
  "duration": 294393,
  "status": "passed"
});
formatter.before({
  "duration": 5816566,
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
  "duration": 23781049,
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
  "duration": 27694051,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 45087573,
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
  "duration": 27658400,
  "status": "passed"
});
formatter.after({
  "duration": 283050,
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
  "duration": 8083126,
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
  "duration": 24168352,
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
  "duration": 25785625,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 43570231,
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
  "duration": 24652886,
  "status": "passed"
});
formatter.after({
  "duration": 291152,
  "status": "passed"
});
formatter.before({
  "duration": 5703130,
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
  "duration": 26851384,
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
  "duration": 30070806,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 44628427,
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
  "duration": 30236638,
  "status": "passed"
});
formatter.after({
  "duration": 261443,
  "status": "passed"
});
formatter.before({
  "duration": 5010631,
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
  "duration": 21916378,
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
  "duration": 27895535,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 47312539,
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
  "duration": 32285509,
  "status": "passed"
});
formatter.after({
  "duration": 244158,
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
  "duration": 4924203,
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
  "duration": 22040077,
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
  "duration": 28573991,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 43892713,
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
  "duration": 25517160,
  "status": "passed"
});
formatter.after({
  "duration": 208507,
  "status": "passed"
});
formatter.before({
  "duration": 7137285,
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
  "duration": 22531633,
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
  "duration": 26079479,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 44778054,
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
  "duration": 27577374,
  "status": "passed"
});
formatter.after({
  "duration": 270085,
  "status": "passed"
});
formatter.before({
  "duration": 4771334,
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
  "duration": 22353916,
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
  "duration": 34339241,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 46847451,
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
  "duration": 32480511,
  "status": "passed"
});
formatter.after({
  "duration": 265224,
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
  "duration": 5696648,
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
  "duration": 22104357,
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
  "duration": 25886097,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 43666922,
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
  "duration": 25009939,
  "status": "passed"
});
formatter.after({
  "duration": 237675,
  "status": "passed"
});
formatter.before({
  "duration": 4776196,
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
  "duration": 22762286,
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
  "duration": 35708035,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 76404014,
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
  "duration": 28528616,
  "status": "passed"
});
formatter.after({
  "duration": 247398,
  "status": "passed"
});
formatter.before({
  "duration": 5684224,
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
  "duration": 21233600,
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
  "duration": 28366025,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 45764947,
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
  "duration": 24192119,
  "status": "passed"
});
formatter.after({
  "duration": 250640,
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
  "duration": 5119205,
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
  "duration": 22226976,
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
  "duration": 30155073,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 46325106,
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
  "duration": 94530,
  "status": "passed"
});
formatter.after({
  "duration": 388923,
  "status": "passed"
});
formatter.before({
  "duration": 4758370,
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
  "duration": 40493415,
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
  "duration": 30757364,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 49453779,
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
  "duration": 77785,
  "status": "passed"
});
formatter.after({
  "duration": 268465,
  "status": "passed"
});
formatter.before({
  "duration": 6060724,
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
  "duration": 22054121,
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
  "duration": 26352265,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 45280954,
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
  "duration": 77244,
  "status": "passed"
});
formatter.after({
  "duration": 263064,
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
  "duration": 7982654,
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
  "duration": 24109473,
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
  "duration": 25975226,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 52011490,
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
  "duration": 414336907,
  "status": "passed"
});
formatter.after({
  "duration": 269546,
  "status": "passed"
});
formatter.before({
  "duration": 4825892,
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
  "duration": 22372822,
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
  "duration": 26901620,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 42596842,
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
  "duration": 420313904,
  "status": "passed"
});
formatter.after({
  "duration": 256041,
  "status": "passed"
});
formatter.before({
  "duration": 6772130,
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
  "duration": 30758444,
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
  "duration": 27332136,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 57442915,
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
  "duration": 427958951,
  "status": "passed"
});
formatter.after({
  "duration": 260362,
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
  "duration": 5456272,
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
  "duration": 21812124,
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
  "duration": 26095684,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 44270293,
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
  "duration": 77785,
  "status": "passed"
});
formatter.after({
  "duration": 256581,
  "status": "passed"
});
formatter.before({
  "duration": 4697871,
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
  "duration": 28157518,
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
  "duration": 27418564,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 42980904,
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
  "duration": 70222,
  "status": "passed"
});
formatter.after({
  "duration": 218770,
  "status": "passed"
});
formatter.before({
  "duration": 4823732,
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
  "duration": 21536637,
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
  "duration": 28499987,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 45597494,
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
  "duration": 103713,
  "status": "passed"
});
formatter.after({
  "duration": 282510,
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
  "duration": 6955789,
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
  "duration": 23045336,
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
  "duration": 28840295,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 56060615,
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
  "duration": 446727750,
  "status": "passed"
});
formatter.after({
  "duration": 294934,
  "status": "passed"
});
formatter.before({
  "duration": 7604534,
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
  "duration": 34826476,
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
  "duration": 28894853,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 48329142,
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
  "duration": 468004024,
  "status": "passed"
});
formatter.after({
  "duration": 300876,
  "status": "passed"
});
formatter.before({
  "duration": 5751205,
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
  "duration": 22469512,
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
  "duration": 26178870,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 45978855,
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
  "duration": 406065802,
  "status": "passed"
});
formatter.after({
  "duration": 243617,
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
  "duration": 5445469,
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
  "duration": 243077,
  "status": "passed"
});
formatter.before({
  "duration": 6466933,
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
  "duration": 287911,
  "status": "passed"
});
formatter.before({
  "duration": 8604931,
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
  "duration": 305737,
  "status": "passed"
});
formatter.before({
  "duration": 6776451,
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
  "duration": 276568,
  "status": "passed"
});
});