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
  "name": "View the team members (pedro, vítor and miriam)",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);view-the-team-members-(pedro,-vítor-and-miriam)",
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
  "name": "the page is loaded and exists \"\u003cmembers\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the application shows a list of team \"\u003cmembers\u003e\" with your main information \"\u003cinformations\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);view-the-team-members-(pedro,-vítor-and-miriam);",
  "rows": [
    {
      "cells": [
        "members",
        "informations"
      ],
      "line": 12,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);view-the-team-members-(pedro,-vítor-and-miriam);;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "21 years old. Master\u0027s student. Front end developer."
      ],
      "line": 13,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);view-the-team-members-(pedro,-vítor-and-miriam);;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "22 years old. Master\u0027s student. Front end developer."
      ],
      "line": 14,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);view-the-team-members-(pedro,-vítor-and-miriam);;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "23 years old. Master\u0027s student."
      ],
      "line": 15,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);view-the-team-members-(pedro,-vítor-and-miriam);;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5400411287,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "View the team members (pedro, vítor and miriam)",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);view-the-team-members-(pedro,-vítor-and-miriam);;2",
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
  "name": "the page is loaded and exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the application shows a list of team \"Miriam Pereira\" with your main information \"21 years old. Master\u0027s student. Front end developer.\"",
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
  "duration": 505563766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 31
    }
  ],
  "location": "Stepdefs.thePageIsLoadedAndExists(String)"
});
formatter.result({
  "duration": 1930921791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 38
    },
    {
      "val": "21 years old. Master\u0027s student. Front end developer.",
      "offset": 82
    }
  ],
  "location": "Stepdefs.theApplicationShowsAListOfTeamWithYourMaformatter.result({
  "duration": 8829614454772,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c2[1 years old. Master\u0027s student. Front end developer].\u003e but was:\u003c2[3 years old. Master\u0027s student].\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\r\n\tat Stepdefs.theApplicationShowsAListOfTeamWithYourMain(Unknown Source)\r\n\tat ✽.Then the application shows a list of team \"Miriam Pereira\" with your main \"21 years old. Master\u0027s student. Front end developer.\"(userStory1.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 12188429,
  "status": "passed"
});
formatter.before({
  "duration": 98320931,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "View the team members (pedro, vítor and miriam)",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);view-the-team-members-(pedro,-vítor-and-miriam);;3",
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
  "name": "the page is loaded and exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the application shows a list of team \"Vítor Dias\" with your main \"22 years old. Master\u0027s student. Front end developer.\"",
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
  "duration": 113461938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 31
    }
  ],
  "location": "Stepdefs.thePageIsLoadedAndExists(String)"
});
: "View the team members (pedro, vítor and miriam)",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);view-the-team-members-(pedro,-vítor-and-miriam);;4",
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
  "name": "the page is loaded and exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the application shows a list of team \"Pedro Jorge\" with your main information \"23 years old. Master\u0027s student.\"",
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
  "duration": 32179095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 31
    }
  ],
  "location": "Stepdefs.thePageIsLoadedAndExists(String)"
});
formatter.result({
  "duration": 454353890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 38
    },
    {
      "val": "23 years old. Master\u0027s student.",
      "offset": 79
    }
  ],
  "location": "Stepdefs.theApplicationShowsAListOfTeamWithYourMain(String,String)"
});
formatter.result({
  "duration": 381166057,
  "status": "passed"
});
formatter.after({
  "duration": 797833,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "There are no members to show",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "doesn\u0027t exists \"\u003cmembers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the application shows a default message: \"There are no members to show.\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;",
  "rows": [
    {
      "cells": [
        "members"
      ],
      "line": 24,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;1"
    },
    {
      "cells": [
        "Miriam Pereira"
      ],
      "line": 25,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;2"
    },
    {
      "cells": [
        "Vítor Dias"
      ],
      "line": 26,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;3"
    },
    {
      "cells": [
        "Pedro Jorge"
      ],
      "line": 27,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23752960,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "There are no members to show",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "doesn\u0027t exists \"Miriam Pereira\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the application shows a default message: \"There are no members to show.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 116197366,
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
  "duration": 44920120,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat Stepdefs.doesnTExists(Stepdefs.java:76)\r\n\tat ✽.And doesn\u0027t exists \"Miriam Pereira\"(userStory1.feature:19)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "There are no members to show.",
      "offset": 42
    }
  ],
  "location": "Stepdefs.theApplicationShowsADefaultMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2712741,
  "status": "passed"
});
formatter.before({
  "duration": 33153565,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "There are no members to show",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "doesn\u0027t exists \"Vítor Dias\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the application shows a default message: \"There are no members to show.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 19187431,
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
  "duration": 422954,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat Stepdefs.doesnTExists(Stepdefs.java:76)\r\n\tat ✽.And doesn\u0027t exists \"Vítor Dias\"(userStory1.feature:19)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "There are no members to show.",
      "offset": 42
    }
  ],
  "location": "Stepdefs.theApplicationShowsADefaultMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 730852,
  "status": "passed"
});
formatter.before({
  "duration": 16661589,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "There are no members to show",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "doesn\u0027t exists \"Pedro Jorge\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the application shows a default message: \"There are no members to show.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 30838929,
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
  "duration": 493176,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat Stepdefs.doesnTExists(Stepdefs.java:76)\r\n\tat ✽.And doesn\u0027t exists \"Pedro Jorge\"(userStory1.feature:19)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "There are no members to show.",
      "offset": 42
    }
  ],
  "location": "Stepdefs.theApplicationShowsADefaultMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 517484,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "A member exists",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "a \"\u003cmember\u003e\" exists",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "that \"\u003cmember\u003e\" appears with his available main information \"\u003cinfo\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;",
  "rows": [
    {
      "cells": [
        "member",
        "info"
      ],
      "line": 36,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;1"
    },
    {
      "cells": [
        "Miriam Pereira",
        "21 years old. Master\u0027s student. Front end developer."
      ],
      "line": 37,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;2"
    },
    {
      "cells": [
        "Vítor Dias",
        "22 years old. Master\u0027s student. Front end developer."
      ],
      "line": 38,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;3"
    },
    {
      "cells": [
        "Pedro Jorge",
        "23 years old. Master\u0027s student."
      ],
      "line": 39,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23904208,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "A member exists",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "a \"Miriam Pereira\" exists",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "that \"Miriam Pereira\" appears with his available main information \"21 years old. Master\u0027s student. Front end developer.\"",
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
  "duration": 42417505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 3
    }
  ],
  "location": "Stepdefs.aExists(String)"
});
formatter.result({
  "duration": 743816,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat Stepdefs.aExists(Stepdefs.java:93)\r\n\tat ✽.And a \"Miriam Pereira\" exists(userStory1.feature:31)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Miriam Pereira",
      "offset": 6
    },
    {
      "val": "21 years old. Master\u0027s student. Front end developer.",
      "offset": 67
    }
  ],
  "location": "Stepdefs.thatAppearsWithHisAvailableMainInformation(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 727071,
  "status": "passed"
});
formatter.before({
  "duration": 12494166,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "A member exists",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "a \"Vítor Dias\" exists",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "that \"Vítor Dias\" appears with his available main information \"22 years old. Master\u0027s student. Front end developer.\"",
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
  "duration": 20187828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 3
    }
  ],
  "location": "Stepdefs.aExists(String)"
});
formatter.result({
  "duration": 324644,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat Stepdefs.aExists(Stepdefs.java:93)\r\n\tat ✽.And a \"Vítor Dias\" exists(userStory1.feature:31)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vítor Dias",
      "offset": 6
    },
    {
      "val": "22 years old. Master\u0027s student. Front end developer.",
      "offset": 63
    }
  ],
  "location": "Stepdefs.thatAppearsWithHisAvailableMainInformation(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 375420,
  "status": "passed"
});
formatter.before({
  "duration": 13138050,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "A member exists",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "a \"Pedro Jorge\" exists",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "that \"Pedro Jorge\" appears with his available main information \"23 years old. Master\u0027s student.\"",
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
  "duration": 20824691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 3
    }
  ],
  "location": "Stepdefs.aExists(String)"
});
formatter.result({
  "duration": 325183,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat Stepdefs.aExists(Stepdefs.java:93)\r\n\tat ✽.And a \"Pedro Jorge\" exists(userStory1.feature:31)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro Jorge",
      "offset": 6
    },
    {
      "val": "23 years old. Master\u0027s student.",
      "offset": 64
    }
  ],
  "location": "Stepdefs.thatAppearsWithHisAvailableMainInformation(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1363393,
  "status": "passed"
});
formatter.before({
  "duration": 36876426,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "A member not exist",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-not-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "a member does not exist",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "that member will not appear",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 107710192,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.aMemberDoesNotExist()"
});
formatter.result({
  "duration": 441320,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat Stepdefs.aMemberDoesNotExist(Stepdefs.java:105)\r\n\tat ✽.And a member does not exist(userStory1.feature:43)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefs.thatMemberWillNotAppear()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3248051,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "the \"\u003cmember\u003e\" of the team has a \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "the application shows \u003cmember\u003e\u0027s \u003cname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;",
  "rows": [
    {
      "cells": [
        "member",
        "name"
      ],
      "line": 54,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;1"
    },
    {
      "cells": [
        "miriam",
        "Miriam Pereira"
      ],
      "line": 55,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;2"
    },
    {
      "cells": [
        "vitor",
        "Vitor Dias"
      ],
      "line": 56,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;3"
    },
    {
      "cells": [
        "pedro",
        "Pedro Jorge"
      ],
      "line": 57,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 27886352,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "the \"miriam\" of the team has a \"Miriam Pereira\"",
  "matchedColumns": [
    0,
    1
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
  "name": "the application shows miriam\u0027s Miriam Pereira",
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
  "duration": 84987339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "miriam",
      "offset": 5
    },
    {
      "val": "Miriam Pereira",
      "offset": 32
    }
  ],
  "location": "Stepdefs.theOfTheTeamHasA(String,String)"
});
formatter.result({
  "duration": 392705,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 52002847,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 191971539,
  "status": "passed"
});
formatter.before({
  "duration": 16139784,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "the \"vitor\" of the team has a \"Vitor Dias\"",
  "matchedColumns": [
    0,
    1
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
  "name": "the application shows vitor\u0027s Vitor Dias",
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
  "duration": 26215602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vitor",
      "offset": 5
    },
    {
      "val": "Vitor Dias",
      "offset": 31
    }
  ],
  "location": "Stepdefs.theOfTheTeamHasA(String,String)"
});
formatter.result({
  "duration": 142605,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 29063926,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 11528880,
  "status": "passed"
});
formatter.before({
  "duration": 23333787,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "the \"pedro\" of the team has a \"Pedro Jorge\"",
  "matchedColumns": [
    0,
    1
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
  "name": "the application shows pedro\u0027s Pedro Jorge",
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
  "duration": 38035094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pedro",
      "offset": 5
    },
    {
      "val": "Pedro Jorge",
      "offset": 31
    }
  ],
  "location": "Stepdefs.theOfTheTeamHasA(String,String)"
});
formatter.result({
  "duration": 634702,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoaded()"
});
formatter.result({
  "duration": 34976103,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2943395,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "some \u003cmember\u003e of team don\u0027t have name",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "the application show \u003cdefault name\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;",
  "rows": [
    {
      "cells": [
        "member",
        "default name"
      ],
      "line": 66,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;1"
    },
    {
      "cells": [
        "miriam",
        "User"
      ],
      "line": 67,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;2"
    },
    {
      "cells": [
        "vitor",
        "User"
      ],
      "line": 68,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;3"
    },
    {
      "cells": [
        "pedro",
        "User"
      ],
      "line": 69,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 76924199,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "some miriam of team don\u0027t have name",
  "matchedColumns": [
    0
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
  "name": "the application show User",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 35778258,
  "status": "passed"
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
  "duration": 792972,
  "status": "passed"
});
formatter.before({
  "duration": 24071661,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "some vitor of team don\u0027t have name",
  "matchedColumns": [
    0
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
  "name": "the application show User",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 87426212,
  "status": "passed"
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
  "duration": 566100,
  "status": "passed"
});
formatter.before({
  "duration": 22729876,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "some pedro of team don\u0027t have name",
  "matchedColumns": [
    0
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
  "name": "the application show User",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 22808741,
  "status": "passed"
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
  "duration": 941519,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 71,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 72,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "some \u003cmember\u003e of team have \u003cphoto\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "the application show \u003cmember\u003e\u0027s \u003cphoto\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;",
  "rows": [
    {
      "cells": [
        "member",
        "photo"
      ],
      "line": 78,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;1"
    },
    {
      "cells": [
        "miriam",
        "miriam.jpg"
      ],
      "line": 79,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;2"
    },
    {
      "cells": [
        "vítor",
        "vítor.jpg"
      ],
      "line": 80,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;3"
    },
    {
      "cells": [
        "pedro",
        "pedro.jpg"
      ],
      "line": 81,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22058982,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 72,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "some miriam of team have miriam.jpg",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "the application show miriam\u0027s miriam.jpg",
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
  "duration": 16433097,
  "status": "passed"
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
  "duration": 24844106,
  "status": "passed"
});
formatter.before({
  "duration": 12675123,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 72,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "some vítor of team have vítor.jpg",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "the application show vítor\u0027s vítor.jpg",
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
  "duration": 19263055,
  "status": "passed"
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
  "duration": 13122925,
  "status": "passed"
});
formatter.before({
  "duration": 29355078,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 72,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "some pedro of team have pedro.jpg",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "the application show pedro\u0027s pedro.jpg",
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
  "duration": 17688455,
  "status": "passed"
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
  "duration": 1175413,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 83,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "some \u003cmember\u003e of team don\u0027t have photo",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the application show a \u003cdefault photo\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 89,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;",
  "rows": [
    {
      "cells": [
        "member",
        "default photo"
      ],
      "line": 90,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;1"
    },
    {
      "cells": [
        "miriam",
        "default.jpg"
      ],
      "line": 91,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;2"
    },
    {
      "cells": [
        "vítor",
        "default.jpg"
      ],
      "line": 92,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;3"
    },
    {
      "cells": [
        "pedro",
        "default.jpg"
      ],
      "line": 93,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11425707,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "some miriam of team don\u0027t have photo",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the application show a default.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 15796235,
  "status": "passed"
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
  "duration": 997697,
  "status": "passed"
});
formatter.before({
  "duration": 9482710,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "some vítor of team don\u0027t have photo",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the application show a default.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 17318977,
  "status": "passed"
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
  "duration": 2472365,
  "status": "passed"
});
formatter.before({
  "duration": 15830806,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 84,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "some pedro of team don\u0027t have photo",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the application show a default.jpg",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 16606491,
  "status": "passed"
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
  "duration": 460226,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 95,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 96,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "some \u003cmember\u003e of team have \u003cshort bio\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "the application show \u003cmember\u003e\u0027s \u003cshort bio\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 101,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;",
  "rows": [
    {
      "cells": [
        "member",
        "short bio"
      ],
      "line": 102,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;1"
    },
    {
      "cells": [
        "miriam",
        "21 years old. Master\u0027s student. Front end developer."
      ],
      "line": 103,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;2"
    },
    {
      "cells": [
        "vítor",
        "22 years old. Master\u0027s student. Front end developer."
      ],
      "line": 104,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;3"
    },
    {
      "cells": [
        "pedro",
        "23 years old. Master\u0027s student."
      ],
      "line": 105,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10989249,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 96,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "some miriam of team have 21 years old. Master\u0027s student. Front end developer.",
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
  "name": "the application show miriam\u0027s 21 years old. Master\u0027s student. Front end developer.",
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
  "duration": 23630341,
  "status": "passed"
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
  "duration": 28807345,
  "status": "passed"
});
formatter.before({
  "duration": 14881724,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 96,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "some vítor of team have 22 years old. Master\u0027s student. Front end developer.",
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
  "name": "the application show vítor\u0027s 22 years old. Master\u0027s student. Front end developer.",
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
  "duration": 44584133,
  "status": "passed"
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
  "duration": 77740398,
  "status": "passed"
});
formatter.before({
  "duration": 10279463,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 96,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "some pedro of team have 23 years old. Master\u0027s student.",
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
  "name": "the application show pedro\u0027s 23 years old. Master\u0027s student.",
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
  "duration": 14929799,
  "status": "passed"
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
  "duration": 361375,
  "status": "passed"
});
formatter.before({
  "duration": 9293110,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 108,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "some member of team don\u0027t have short bio",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "the application don\u0027t show member short bio",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 16694539,
  "status": "passed"
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
  "duration": 338147,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 113,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "some \u003cmember\u003e of team have \u003cfacebook link\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "the application show facebook icon with \u003cmember\u003e\u0027s \u003cfacebook link\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 119,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;",
  "rows": [
    {
      "cells": [
        "member",
        "facebook link"
      ],
      "line": 120,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;1"
    },
    {
      "cells": [
        "miriam",
        "https://www.facebook.com/miriampereira95"
      ],
      "line": 121,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2"
    },
    {
      "cells": [
        "vítor",
        "https://www.facebook.com/vitor.dias.3954"
      ],
      "line": 122,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3"
    },
    {
      "cells": [
        "pedro",
        "https://www.facebook.com/pedrombjorge"
      ],
      "line": 123,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10928209,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "some miriam of team have https://www.facebook.com/miriampereira95",
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
  "name": "the application show facebook icon with miriam\u0027s https://www.facebook.com/miriampereira95",
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
  "duration": 18176770,
  "status": "passed"
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
  "duration": 596349,
  "status": "passed"
});
formatter.before({
  "duration": 10658664,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "some vítor of team have https://www.facebook.com/vitor.dias.3954",
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
  "name": "the application show facebook icon with vítor\u0027s https://www.facebook.com/vitor.dias.3954",
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
  "duration": 21948788,
  "status": "passed"
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
  "duration": 1056035,
  "status": "passed"
});
formatter.before({
  "duration": 13840813,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "some pedro of team have https://www.facebook.com/pedrombjorge",
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
  "name": "the application show facebook icon with pedro\u0027s https://www.facebook.com/pedrombjorge",
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
  "duration": 65385596,
  "status": "passed"
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
  "duration": 1879256,
  "status": "passed"
});
formatter.before({
  "duration": 22686662,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 126,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "some member of team don\u0027t have facebook link",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "the application show the disabled facebook icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 19809169,
  "status": "passed"
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
  "duration": 5551342,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 131,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 132,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "some \u003cmember\u003e of team have \u003clinkedin link\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "the application show linkedin icon with \u003cmember\u003e\u0027s \u003clinkedin link\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 137,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;",
  "rows": [
    {
      "cells": [
        "member",
        "linkedin link"
      ],
      "line": 138,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;1"
    },
    {
      "cells": [
        "miriam",
        "https://www.linkedin.com/in/miriammpereira/"
      ],
      "line": 139,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2"
    },
    {
      "cells": [
        "vítor",
        "https://www.linkedin.com/in/vítor-dias-6aa9a310b/"
      ],
      "line": 140,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3"
    },
    {
      "cells": [
        "pedro",
        "https://www.linkedin.com/in/pedrombjorge/"
      ],
      "line": 141,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18164886,
  "status": "passed"
});
formatter.scenario({
  "line": 139,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 132,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "some miriam of team have https://www.linkedin.com/in/miriammpereira/",
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
  "name": "the application show linkedin icon with miriam\u0027s https://www.linkedin.com/in/miriammpereira/",
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
  "duration": 16560037,
  "status": "passed"
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
  "duration": 650366,
  "status": "passed"
});
formatter.before({
  "duration": 9750095,
  "status": "passed"
});
formatter.scenario({
  "line": 140,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 132,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "some vítor of team have https://www.linkedin.com/in/vítor-dias-6aa9a310b/",
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
  "name": "the application show linkedin icon with vítor\u0027s https://www.linkedin.com/in/vítor-dias-6aa9a310b/",
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
  "duration": 14659173,
  "status": "passed"
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
  "duration": 382442,
  "status": "passed"
});
formatter.before({
  "duration": 10805591,
  "status": "passed"
});
formatter.scenario({
  "line": 141,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 132,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "some pedro of team have https://www.linkedin.com/in/pedrombjorge/",
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
  "name": "the application show linkedin icon with pedro\u0027s https://www.linkedin.com/in/pedrombjorge/",
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
  "duration": 13442167,
  "status": "passed"
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
  "duration": 18549489,
  "status": "passed"
});
formatter.before({
  "duration": 34276581,
  "status": "passed"
});
formatter.scenario({
  "line": 143,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 144,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "some member of team don\u0027t have linkedin link",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 147,
  "name": "the application show the disabled linkedin icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 22450066,
  "status": "passed"
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
  "duration": 619036,
  "status": "passed"
});
});