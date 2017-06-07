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
  "duration": 3003131914,
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
  "duration": 338318576,
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
  "duration": 1343129343,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 150274623,
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
  "duration": 417856124,
  "status": "passed"
});
formatter.after({
  "duration": 1630777,
  "status": "passed"
});
formatter.before({
  "duration": 311233298,
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
  "duration": 41149183,
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
  "duration": 327981854,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 85462149,
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
  "duration": 283068217,
  "status": "passed"
});
formatter.after({
  "duration": 333286,
  "status": "passed"
});
formatter.before({
  "duration": 18395000,
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
  "duration": 38878842,
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
  "duration": 345029126,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 50591379,
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
  "duration": 321504659,
  "status": "passed"
});
formatter.after({
  "duration": 456445,
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
  "duration": 11013016,
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
  "duration": 20581074,
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
  "duration": 32242295,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 42082598,
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
  "duration": 235200923,
  "status": "passed"
});
formatter.after({
  "duration": 376499,
  "status": "passed"
});
formatter.before({
  "duration": 12597879,
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
  "duration": 14676459,
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
  "duration": 20404978,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 39014965,
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
  "duration": 255273694,
  "status": "passed"
});
formatter.after({
  "duration": 1300733,
  "status": "passed"
});
formatter.before({
  "duration": 21796459,
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
  "duration": 16613514,
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
  "duration": 20195931,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27898236,
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
  "duration": 197604447,
  "status": "passed"
});
formatter.after({
  "duration": 316541,
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
  "duration": 9246655,
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
  "duration": 13215295,
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
  "duration": 22158914,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 29451229,
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
  "duration": 225317405,
  "status": "passed"
});
formatter.after({
  "duration": 298175,
  "status": "passed"
});
formatter.before({
  "duration": 10761296,
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
  "duration": 10944954,
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
  "duration": 16856591,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31337508,
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
  "duration": 224836652,
  "status": "passed"
});
formatter.after({
  "duration": 346250,
  "status": "passed"
});
formatter.before({
  "duration": 8924173,
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
  "duration": 10109309,
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
  "duration": 14756944,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 19775678,
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
  "duration": 195324384,
  "status": "passed"
});
formatter.after({
  "duration": 313840,
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
  "duration": 6148231,
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
  "duration": 9850567,
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
  "duration": 17324379,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 19903698,
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
  "duration": 19213899,
  "status": "passed"
});
formatter.after({
  "duration": 982032,
  "status": "passed"
});
formatter.before({
  "duration": 14987598,
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
  "duration": 19705455,
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
  "duration": 32679293,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 22809280,
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
  "duration": 29084992,
  "status": "passed"
});
formatter.after({
  "duration": 360295,
  "status": "passed"
});
formatter.before({
  "duration": 11286342,
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
  "duration": 11002212,
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
  "duration": 16198122,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 52738021,
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
  "duration": 18292907,
  "status": "passed"
});
formatter.after({
  "duration": 826463,
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
  "duration": 9737131,
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
  "duration": 10451238,
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
  "duration": 19893975,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 23454785,
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
  "duration": 17573939,
  "status": "passed"
});
formatter.after({
  "duration": 340308,
  "status": "passed"
});
formatter.before({
  "duration": 14274571,
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
  "duration": 12123068,
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
  "duration": 19262515,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27973860,
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
  "duration": 19784861,
  "status": "passed"
});
formatter.after({
  "duration": 479132,
  "status": "passed"
});
formatter.before({
  "duration": 21175802,
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
  "duration": 19157182,
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
  "duration": 18212421,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 23299217,
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
  "duration": 16724249,
  "status": "passed"
});
formatter.after({
  "duration": 898846,
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
  "duration": 9545370,
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
  "duration": 10317815,
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
  "duration": 22120562,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 29070948,
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
  "duration": 274689077,
  "status": "passed"
});
formatter.after({
  "duration": 1073861,
  "status": "passed"
});
formatter.before({
  "duration": 11853523,
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
  "duration": 11281481,
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
  "duration": 15158832,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 29920638,
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
  "duration": 262005851,
  "status": "passed"
});
formatter.after({
  "duration": 346250,
  "status": "passed"
});
formatter.before({
  "duration": 10341583,
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
  "duration": 10980605,
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
  "duration": 18481967,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31152229,
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
  "duration": 301264434,
  "status": "passed"
});
formatter.after({
  "duration": 890202,
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
  "duration": 8659489,
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
  "duration": 10541987,
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
  "duration": 38978773,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 28295262,
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
  "duration": 227778966,
  "status": "passed"
});
formatter.after({
  "duration": 311139,
  "status": "passed"
});
formatter.before({
  "duration": 7463009,
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
  "duration": 17552331,
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
  "duration": 21504766,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 33563014,
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
  "duration": 226519826,
  "status": "passed"
});
formatter.after({
  "duration": 329505,
  "status": "passed"
});
formatter.before({
  "duration": 9014922,
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
  "duration": 15142086,
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
  "duration": 22882204,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 30937240,
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
  "duration": 284339781,
  "status": "passed"
});
formatter.after({
  "duration": 803235,
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
  "duration": 14400431,
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
  "duration": 12497407,
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
  "duration": 18861707,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 28511330,
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
  "duration": 17626875,
  "status": "passed"
});
formatter.after({
  "duration": 411070,
  "status": "passed"
});
formatter.before({
  "duration": 12460676,
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
  "duration": 11190733,
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
  "duration": 26410604,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 30815703,
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
  "duration": 17620934,
  "status": "passed"
});
formatter.after({
  "duration": 763802,
  "status": "passed"
});
formatter.before({
  "duration": 12383431,
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
  "duration": 11385734,
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
  "duration": 21516650,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31914951,
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
  "duration": 16284009,
  "status": "passed"
});
formatter.after({
  "duration": 7561320,
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
  "duration": 9924571,
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
  "duration": 11565072,
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
  "duration": 18096825,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27748608,
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
  "duration": 16644844,
  "status": "passed"
});
formatter.after({
  "duration": 342469,
  "status": "passed"
});
formatter.before({
  "duration": 12918200,
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
  "duration": 14889287,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31625959,
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
  "duration": 11816791,
  "status": "passed"
});
formatter.after({
  "duration": 1094387,
  "status": "passed"
});
formatter.before({
  "duration": 9378457,
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
  "duration": 9852187,
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
  "duration": 16573001,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 33814194,
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
  "duration": 23337568,
  "status": "passed"
});
formatter.after({
  "duration": 812958,
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
  "duration": 14393409,
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
  "duration": 9514581,
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
  "duration": 16698861,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 24155388,
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
  "duration": 17094807,
  "status": "passed"
});
formatter.after({
  "duration": 312219,
  "status": "passed"
});
formatter.before({
  "duration": 12876067,
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
  "duration": 12497407,
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
  "duration": 17727348,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27149018,
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
  "duration": 20101401,
  "status": "passed"
});
formatter.after({
  "duration": 348411,
  "status": "passed"
});
formatter.before({
  "duration": 13654454,
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
  "duration": 12457435,
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
  "duration": 17428633,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27319172,
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
  "duration": 28778716,
  "status": "passed"
});
formatter.after({
  "duration": 359214,
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
  "duration": 11299307,
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
  "duration": 17659286,
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
  "duration": 21512869,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 27933887,
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
  "duration": 26095684,
  "status": "passed"
});
formatter.after({
  "duration": 1475748,
  "status": "passed"
});
formatter.before({
  "duration": 10603566,
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
  "duration": 11915102,
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
  "duration": 20205114,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 31099832,
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
  "duration": 17838083,
  "status": "passed"
});
formatter.after({
  "duration": 5683684,
  "status": "passed"
});
formatter.before({
  "duration": 11107006,
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
  "duration": 14707789,
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
  "duration": 47506460,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 30020570,
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
  "duration": 17601487,
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
  "duration": 13092136,
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
  "duration": 12961954,
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
  "duration": 228442297,
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
  "duration": 69100355,
  "status": "passed"
});
formatter.after({
  "duration": 567720,
  "status": "passed"
});
formatter.before({
  "duration": 14048240,
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
  "duration": 11271758,
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
  "duration": 254574172,
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
  "duration": 52350178,
  "status": "passed"
});
formatter.after({
  "duration": 290072,
  "status": "passed"
});
formatter.before({
  "duration": 11657441,
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
  "duration": 11023819,
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
  "duration": 284280362,
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
  "duration": 38224694,
  "status": "passed"
});
formatter.after({
  "duration": 982032,
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
  "duration": 8510401,
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
  "duration": 48187616,
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
  "duration": 55184998,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 98801144,
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
  "duration": 304306139,
  "status": "passed"
});
formatter.after({
  "duration": 727071,
  "status": "passed"
});
formatter.before({
  "duration": 16303996,
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
  "duration": 46492018,
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
  "duration": 55653867,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 78897446,
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
  "duration": 230574894,
  "status": "passed"
});
formatter.after({
  "duration": 422414,
  "status": "passed"
});
formatter.before({
  "duration": 7320404,
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
  "duration": 35974880,
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
  "duration": 40489093,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 52833631,
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
  "duration": 226330767,
  "status": "passed"
});
formatter.after({
  "duration": 527748,
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
  "duration": 6339453,
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
  "name": "the application show User",
  "matchedColumns": [
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
  "duration": 32812716,
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
  "duration": 43866245,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 74327595,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 601211,
  "status": "passed"
});
formatter.before({
  "duration": 11119970,
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
  "name": "the application show User",
  "matchedColumns": [
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
  "duration": 34055111,
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
  "duration": 32178014,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 52883327,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 359754,
  "status": "passed"
});
formatter.before({
  "duration": 5825749,
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
  "name": "the application show User",
  "matchedColumns": [
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
  "duration": 30993958,
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
  "duration": 34778400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 91501806,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 293313,
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
  "duration": 8073403,
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
  "duration": 32330884,
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
  "duration": 29333471,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 54446043,
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
  "duration": 31870657,
  "status": "passed"
});
formatter.after({
  "duration": 255501,
  "status": "passed"
});
formatter.before({
  "duration": 6657073,
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
  "duration": 28516733,
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
  "duration": 37640768,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 143370151,
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
  "duration": 38623880,
  "status": "passed"
});
formatter.after({
  "duration": 525046,
  "status": "passed"
});
formatter.before({
  "duration": 16621076,
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
  "duration": 32627438,
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
  "duration": 40418870,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 91010251,
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
  "duration": 36880747,
  "status": "passed"
});
formatter.after({
  "duration": 236595,
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
  "duration": 10312413,
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
  "name": "the application show a default.jpg",
  "matchedColumns": [
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
  "duration": 29151974,
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
  "duration": 41356609,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 63491215,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 266304,
  "status": "passed"
});
formatter.before({
  "duration": 12569790,
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
  "name": "the application show a default.jpg",
  "matchedColumns": [
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
  "duration": 32138042,
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
  "duration": 40629538,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 76160397,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 273327,
  "status": "passed"
});
formatter.before({
  "duration": 11094042,
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
  "name": "the application show a default.jpg",
  "matchedColumns": [
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
  "duration": 38091272,
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
  "duration": 54338009,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 58812249,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 244698,
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
  "duration": 16662129,
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
  "duration": 39146226,
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
  "duration": 48056895,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 72142601,
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
  "duration": 195330866,
  "status": "passed"
});
formatter.after({
  "duration": 266844,
  "status": "passed"
});
formatter.before({
  "duration": 5865722,
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
  "duration": 25431813,
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
  "duration": 39068982,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 47510782,
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
  "duration": 180429155,
  "status": "passed"
});
formatter.after({
  "duration": 275488,
  "status": "passed"
});
formatter.before({
  "duration": 6762407,
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
  "duration": 25941195,
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
  "duration": 31137645,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 49751413,
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
  "duration": 158660245,
  "status": "passed"
});
formatter.after({
  "duration": 341928,
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
  "duration": 5432504,
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
  "duration": 32054855,
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
  "duration": 34940452,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 62555638,
  "status": "passed"
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
  "duration": 10383176,
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
  "duration": 29423680,
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
  "duration": 34096704,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 63848808,
  "status": "passed"
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
  "duration": 11372230,
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
  "duration": 28812747,
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
  "duration": 29911995,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 46332668,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 160971,
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
  "duration": 8540111,
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
  "duration": 22182141,
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
  "duration": 29834211,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 47502679,
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
  "duration": 28028957,
  "status": "passed"
});
formatter.after({
  "duration": 223091,
  "status": "passed"
});
formatter.before({
  "duration": 5112723,
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
  "duration": 23738376,
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
  "duration": 27080417,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 61093933,
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
  "duration": 25162808,
  "status": "passed"
});
formatter.after({
  "duration": 278728,
  "status": "passed"
});
formatter.before({
  "duration": 5360662,
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
  "duration": 28733881,
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
  "duration": 29210853,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 48033668,
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
  "duration": 42046407,
  "status": "passed"
});
formatter.after({
  "duration": 211207,
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
  "name": "the application show the disabled facebook icon",
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
        "facebook link"
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
  "duration": 7482455,
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
  "name": "the application show the disabled facebook icon",
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
  "duration": 28101340,
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
  "duration": 27319172,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 54936519,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 250639,
  "status": "passed"
});
formatter.before({
  "duration": 7197785,
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
  "name": "the application show the disabled facebook icon",
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
  "duration": 22989698,
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
  "duration": 34533162,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 55972568,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 229032,
  "status": "passed"
});
formatter.before({
  "duration": 5341216,
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
  "name": "the application show the disabled facebook icon",
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
  "duration": 23042635,
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
  "duration": 26377653,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 45421939,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 249559,
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
  "duration": 5695028,
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
  "duration": 24011162,
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
  "duration": 28975338,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 53258207,
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
  "duration": 24717706,
  "status": "passed"
});
formatter.after({
  "duration": 243077,
  "status": "passed"
});
formatter.before({
  "duration": 4622788,
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
  "duration": 32117516,
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
  "duration": 27607084,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 45857317,
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
  "duration": 24443299,
  "status": "passed"
});
formatter.after({
  "duration": 216609,
  "status": "passed"
});
formatter.before({
  "duration": 5040880,
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
  "duration": 22280993,
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
  "duration": 41726626,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 56977827,
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
  "duration": 27247330,
  "status": "passed"
});
formatter.after({
  "duration": 294934,
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
  "name": "the application show the disabled linkedin icon",
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
  "duration": 7648288,
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
  "name": "the application show the disabled linkedin icon",
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
  "duration": 24895963,
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
  "duration": 27204656,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 48390181,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 279809,
  "status": "passed"
});
formatter.before({
  "duration": 5682604,
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
  "name": "the application show the disabled linkedin icon",
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
  "duration": 27105804,
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
  "duration": 27369408,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 46835028,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 260362,
  "status": "passed"
});
formatter.before({
  "duration": 9175353,
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
  "name": "the application show the disabled linkedin icon",
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
  "duration": 28237463,
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
  "duration": 32129399,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 53232819,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 251180,
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
  "duration": 6009408,
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
  "duration": 25261659,
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
  "duration": 29214094,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 48609491,
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
  "duration": 79405,
  "status": "passed"
});
formatter.after({
  "duration": 261983,
  "status": "passed"
});
formatter.before({
  "duration": 7429519,
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
  "duration": 29346436,
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
  "duration": 37015250,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 79976167,
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
  "duration": 80486,
  "status": "passed"
});
formatter.after({
  "duration": 205265,
  "status": "passed"
});
formatter.before({
  "duration": 4947971,
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
  "duration": 23030211,
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
  "duration": 27420184,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 52923840,
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
  "duration": 207966,
  "status": "passed"
});
formatter.after({
  "duration": 306278,
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
  "name": "the application don\u0027t show the projects section",
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
  "duration": 5229400,
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
  "name": "the application don\u0027t show the projects section",
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
  "duration": 23485575,
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
  "duration": 26974002,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 46023690,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 210127,
  "status": "passed"
});
formatter.before({
  "duration": 5884628,
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
  "name": "the application don\u0027t show the projects section",
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
  "duration": 23696242,
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
  "duration": 29307543,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 52234582,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 252260,
  "status": "passed"
});
formatter.before({
  "duration": 5554584,
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
  "name": "the application don\u0027t show the projects section",
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
  "duration": 27959275,
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
  "duration": 35764213,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 52296161,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 238215,
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
  "name": "the application show the \u003cmember\u003e\u0027s \u003ctags\u003e",
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
  "duration": 7624520,
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
  "name": "the application show the \u003cmember\u003e\u0027s #PHP, #LARAVEL, #IOS, #SWIFT, #JS, #CSS, #HTML, #ANGULAR, #BOOTSTRAP",
  "matchedColumns": [
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
  "duration": 23180379,
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
  "duration": 28888910,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 50010696,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 284671,
  "status": "passed"
});
formatter.before({
  "duration": 6720814,
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
  "name": "the application show the \u003cmember\u003e\u0027s #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS, #REACT, #REDUX, #MATERIAL",
  "matchedColumns": [
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
  "duration": 28810585,
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
  "duration": 28391413,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 46207348,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 258742,
  "status": "passed"
});
formatter.before({
  "duration": 5216436,
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
  "name": "the application show the \u003cmember\u003e\u0027s #PHP, #LARAVEL, #IOS, #SWIFT, #CSS, #HTML, #ANGULAR, #BOOTSTRAP, #NODEJS",
  "matchedColumns": [
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
  "duration": 24011702,
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
  "duration": 27305668,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 49617451,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 232274,
  "status": "passed"
});
formatter.before({
  "duration": 6070987,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "An member don\u0027t have tags",
  "description": "",
  "id": "user-views-the-detailed-information-of-the-member-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-tags",
  "type": "scenario",
  "keyword": "Scenario"
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
  "duration": 23444522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cmembers\u003e",
      "offset": 8
    }
  ],
  "location": "Stepdefs.existsOnDetailedPage(String)"
});
formatter.result({
  "duration": 34828096,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.theDetailedPageIsLoaded()"
});
formatter.result({
  "duration": 65064734,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 258742,
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
  "duration": 6314065,
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
  "duration": 287911,
  "status": "passed"
});
formatter.before({
  "duration": 6752143,
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
  "duration": 291153,
  "status": "passed"
});
formatter.before({
  "duration": 5906235,
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
  "duration": 268465,
  "status": "passed"
});
formatter.before({
  "duration": 6078010,
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
  "duration": 273867,
  "status": "passed"
});
});