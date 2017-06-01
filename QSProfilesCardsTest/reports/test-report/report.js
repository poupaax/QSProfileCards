$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("userStory1.feature");
formatter.feature({
  "line": 1,
  "name": "User views the main informations about all members of the team (pedro, vítor and miriam)",
  "description": "As an user\r\nI want to see a list of the team members (pedro, vítor and miriam)\r\nSo that I can know the team better and see the main information",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam)",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3008845848,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "View the team members (pedro, vítor and miriam)",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);view-the-team-members-(pedro,-vítor-and-miriam)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page is loaded and exists members",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the application shows a list of team members (pedro, vítor and miriam) with your main informations (photo, short bio, facebook/linkedin links)",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 352957763,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.thePageIsLoadedAndExistsMembers()"
});
formatter.result({
  "duration": 1231800003,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 15697923,
  "status": "passed"
});
formatter.before({
  "duration": 49414886,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "There are no members to show",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);there-are-no-members-to-show",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "doesn\u0027t exists members",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the application shows a default message: \"There are no members to show.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 46613557,
  "status": "passed"
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
  "duration": 487775,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "A member exists",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists",
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
  "name": "a \u003cmember\u003e exists",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "that \u003cmember\u003e appears with his available main information (photo, short bio, facebook/linkedin links)",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;",
  "rows": [
    {
      "cells": [
        "member"
      ],
      "line": 24,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;1"
    },
    {
      "cells": [
        "miriam"
      ],
      "line": 25,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;2"
    },
    {
      "cells": [
        "vítor"
      ],
      "line": 26,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;3"
    },
    {
      "cells": [
        "pedro"
      ],
      "line": 27,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25129317,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "A member exists",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;2",
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
  "name": "a miriam exists",
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
  "name": "that miriam appears with his available main information (photo, short bio, facebook/linkedin links)",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 54409312,
  "status": "passed"
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
  "duration": 700062,
  "status": "passed"
});
formatter.before({
  "duration": 390105895,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "A member exists",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;3",
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
  "name": "a vítor exists",
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
  "name": "that vítor appears with his available main information (photo, short bio, facebook/linkedin links)",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 36135311,
  "status": "passed"
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
  "duration": 614715,
  "status": "passed"
});
formatter.before({
  "duration": 28233682,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "A member exists",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-exists;;4",
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
  "name": "a pedro exists",
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
  "name": "that pedro appears with his available main information (photo, short bio, facebook/linkedin links)",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 29081212,
  "status": "passed"
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
  "duration": 380821,
  "status": "passed"
});
formatter.before({
  "duration": 31806917,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "A member not exist",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-not-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "a member does not exist",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "that member will not appear",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 26488929,
  "status": "passed"
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
  "duration": 409450,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the \u003cmember\u003e of the team has a \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "the application shows \u003cmember\u003e\u0027s \u003cname\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;",
  "rows": [
    {
      "cells": [
        "member",
        "name"
      ],
      "line": 42,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;1"
    },
    {
      "cells": [
        "miriam",
        "Miriam Pereira"
      ],
      "line": 43,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;2"
    },
    {
      "cells": [
        "vitor",
        "Vitor Dias"
      ],
      "line": 44,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;3"
    },
    {
      "cells": [
        "pedro",
        "Pedro Jorge"
      ],
      "line": 45,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20050085,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the miriam of the team has a Miriam Pereira",
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
  "duration": 34775699,
  "status": "passed"
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
  "duration": 1065758,
  "status": "passed"
});
formatter.before({
  "duration": 107796078,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the vitor of the team has a Vitor Dias",
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
  "duration": 24849508,
  "status": "passed"
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
  "duration": 6053162,
  "status": "passed"
});
formatter.before({
  "duration": 12403418,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "A member has a name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-has-a-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the pedro of the team has a Pedro Jorge",
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
  "duration": 18730986,
  "status": "passed"
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
  "duration": 7848152,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name",
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
  "name": "some \u003cmember\u003e of team don\u0027t have name",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "the application show \u003cdefault name\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;",
  "rows": [
    {
      "cells": [
        "member",
        "default name"
      ],
      "line": 54,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;1"
    },
    {
      "cells": [
        "miriam",
        "User"
      ],
      "line": 55,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;2"
    },
    {
      "cells": [
        "vitor",
        "User"
      ],
      "line": 56,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;3"
    },
    {
      "cells": [
        "pedro",
        "User"
      ],
      "line": 57,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17727888,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;2",
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
  "name": "some miriam of team don\u0027t have name",
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
  "duration": 21058584,
  "status": "passed"
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
  "duration": 655768,
  "status": "passed"
});
formatter.before({
  "duration": 19491547,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;3",
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
  "name": "some vitor of team don\u0027t have name",
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
  "duration": 21295180,
  "status": "passed"
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
  "duration": 339228,
  "status": "passed"
});
formatter.before({
  "duration": 9229910,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "A member don\u0027t have name",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);a-member-don\u0027t-have-name;;4",
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
  "name": "some pedro of team don\u0027t have name",
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
  "duration": 21167700,
  "status": "passed"
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
  "duration": 339768,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo",
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
  "name": "some \u003cmember\u003e of team have \u003cphoto\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "the application show \u003cmember\u003e\u0027s \u003cphoto\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;",
  "rows": [
    {
      "cells": [
        "member",
        "photo"
      ],
      "line": 66,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;1"
    },
    {
      "cells": [
        "miriam",
        "miriam.jpg"
      ],
      "line": 67,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;2"
    },
    {
      "cells": [
        "vítor",
        "vítor.jpg"
      ],
      "line": 68,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;3"
    },
    {
      "cells": [
        "pedro",
        "pedro.jpg"
      ],
      "line": 69,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11921584,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;2",
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
  "name": "some miriam of team have miriam.jpg",
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
  "duration": 16799333,
  "status": "passed"
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
  "duration": 381901,
  "status": "passed"
});
formatter.before({
  "duration": 15141007,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;3",
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
  "name": "some vítor of team have vítor.jpg",
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
  "duration": 58528659,
  "status": "passed"
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
  "duration": 458606,
  "status": "passed"
});
formatter.before({
  "duration": 11865406,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "An member have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-photo;;4",
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
  "name": "some pedro of team have pedro.jpg",
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
  "duration": 16770164,
  "status": "passed"
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
  "duration": 682237,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 71,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo",
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
  "name": "some \u003cmember\u003e of team don\u0027t have photo",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "the application show a \u003cdefault photo\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;",
  "rows": [
    {
      "cells": [
        "member",
        "default photo"
      ],
      "line": 78,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;1"
    },
    {
      "cells": [
        "miriam",
        "default.jpg"
      ],
      "line": 79,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;2"
    },
    {
      "cells": [
        "vítor",
        "default.jpg"
      ],
      "line": 80,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;3"
    },
    {
      "cells": [
        "pedro",
        "default.jpg"
      ],
      "line": 81,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19113967,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;2",
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
  "name": "some miriam of team don\u0027t have photo",
  "matchedColumns": [
    0
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
  "duration": 15271727,
  "status": "passed"
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
  "duration": 677375,
  "status": "passed"
});
formatter.before({
  "duration": 10204919,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;3",
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
  "name": "some vítor of team don\u0027t have photo",
  "matchedColumns": [
    0
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
  "duration": 20102481,
  "status": "passed"
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
  "duration": 1537328,
  "status": "passed"
});
formatter.before({
  "duration": 21299501,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "An member don\u0027t have photo",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-photo;;4",
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
  "name": "some pedro of team don\u0027t have photo",
  "matchedColumns": [
    0
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
  "duration": 17564216,
  "status": "passed"
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
  "duration": 655228,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 83,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio",
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
  "name": "some \u003cmember\u003e of team have \u003cshort bio\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the application show \u003cmember\u003e\u0027s \u003cshort bio\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 89,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;",
  "rows": [
    {
      "cells": [
        "member",
        "short bio"
      ],
      "line": 90,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;1"
    },
    {
      "cells": [
        "miriam",
        "21 years old. Master\u0027s student. Front end developer."
      ],
      "line": 91,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;2"
    },
    {
      "cells": [
        "vítor",
        "22 years old. Master\u0027s student. Front end developer."
      ],
      "line": 92,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;3"
    },
    {
      "cells": [
        "pedro",
        "23 years old. Master\u0027s student."
      ],
      "line": 93,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16551394,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;2",
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
  "name": "some miriam of team have 21 years old. Master\u0027s student. Front end developer.",
  "matchedColumns": [
    0,
    1
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
  "duration": 19627671,
  "status": "passed"
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
  "duration": 567720,
  "status": "passed"
});
formatter.before({
  "duration": 50225144,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;3",
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
  "name": "some vítor of team have 22 years old. Master\u0027s student. Front end developer.",
  "matchedColumns": [
    0,
    1
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
  "duration": 22271270,
  "status": "passed"
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
  "duration": 373259,
  "status": "passed"
});
formatter.before({
  "duration": 13307124,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "An member have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-short-bio;;4",
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
  "name": "some pedro of team have 23 years old. Master\u0027s student.",
  "matchedColumns": [
    0,
    1
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
  "duration": 25095286,
  "status": "passed"
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
  "duration": 325184,
  "status": "passed"
});
formatter.before({
  "duration": 13865662,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "An member don\u0027t have short bio",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-short-bio",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 96,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "some member of team don\u0027t have short bio",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "the application don\u0027t show member short bio",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 19512614,
  "status": "passed"
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
  "duration": 2905583,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 101,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "some \u003cmember\u003e of team have \u003cfacebook link\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "the application show facebook icon with \u003cmember\u003e\u0027s \u003cfacebook link\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 107,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;",
  "rows": [
    {
      "cells": [
        "member",
        "facebook link"
      ],
      "line": 108,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;1"
    },
    {
      "cells": [
        "miriam",
        "https://www.facebook.com/miriampereira95"
      ],
      "line": 109,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2"
    },
    {
      "cells": [
        "vítor",
        "https://www.facebook.com/vitor.dias.3954"
      ],
      "line": 110,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3"
    },
    {
      "cells": [
        "pedro",
        "https://www.facebook.com/pedrombjorge"
      ],
      "line": 111,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19036723,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "some miriam of team have https://www.facebook.com/miriampereira95",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 105,
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
  "duration": 13662017,
  "status": "passed"
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
  "duration": 1034969,
  "status": "passed"
});
formatter.before({
  "duration": 11352244,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "some vítor of team have https://www.facebook.com/vitor.dias.3954",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 105,
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
  "duration": 19707616,
  "status": "passed"
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
  "duration": 324643,
  "status": "passed"
});
formatter.before({
  "duration": 12563308,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "An member have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-facebook-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "some pedro of team have https://www.facebook.com/pedrombjorge",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 105,
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
  "duration": 17276305,
  "status": "passed"
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
  "duration": 337607,
  "status": "passed"
});
formatter.before({
  "duration": 15881041,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "An member don\u0027t have facebook link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-facebook-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 114,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "some member of team don\u0027t have facebook link",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "the application show the disabled facebook icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 18322076,
  "status": "passed"
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
  "duration": 7131344,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 119,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 120,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "some \u003cmember\u003e of team have \u003clinkedin link\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "the application show linkedin icon with \u003cmember\u003e\u0027s \u003clinkedin link\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 125,
  "name": "",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;",
  "rows": [
    {
      "cells": [
        "member",
        "linkedin link"
      ],
      "line": 126,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;1"
    },
    {
      "cells": [
        "miriam",
        "https://www.linkedin.com/in/miriammpereira/"
      ],
      "line": 127,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2"
    },
    {
      "cells": [
        "vítor",
        "https://www.linkedin.com/in/vítor-dias-6aa9a310b/"
      ],
      "line": 128,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3"
    },
    {
      "cells": [
        "pedro",
        "https://www.linkedin.com/in/pedrombjorge/"
      ],
      "line": 129,
      "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10246513,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 120,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "some miriam of team have https://www.linkedin.com/in/miriammpereira/",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 123,
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
  "duration": 20409839,
  "status": "passed"
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
  "duration": 338687,
  "status": "passed"
});
formatter.before({
  "duration": 14322107,
  "status": "passed"
});
formatter.scenario({
  "line": 128,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 120,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "some vítor of team have https://www.linkedin.com/in/vítor-dias-6aa9a310b/",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 123,
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
  "duration": 13763029,
  "status": "passed"
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
  "duration": 341388,
  "status": "passed"
});
formatter.before({
  "duration": 7720671,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "An member have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-have-linkedin-link;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 120,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "some pedro of team have https://www.linkedin.com/in/pedrombjorge/",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 123,
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
  "duration": 12144675,
  "status": "passed"
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
  "duration": 332205,
  "status": "passed"
});
formatter.before({
  "duration": 9289329,
  "status": "passed"
});
formatter.scenario({
  "line": 131,
  "name": "An member don\u0027t have linkedin link",
  "description": "",
  "id": "user-views-the-main-informations-about-all-members-of-the-team-(pedro,-vítor-and-miriam);an-member-don\u0027t-have-linkedin-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 132,
  "name": "that I\u0027m in the main page",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "some member of team don\u0027t have linkedin link",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "the application show the disabled linkedin icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.thatIMInTheMainPage()"
});
formatter.result({
  "duration": 15656330,
  "status": "passed"
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
  "duration": 1222408,
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
  "duration": 30129144,
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
  "duration": 1158668,
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
  "duration": 19791343,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 303036,
  "status": "passed"
});
formatter.before({
  "duration": 34930188,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 8273267,
  "status": "passed"
});
formatter.before({
  "duration": 30505104,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2712201,
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
  "duration": 23783750,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 260902,
  "status": "passed"
});
formatter.before({
  "duration": 17664687,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 25112572,
  "status": "passed"
});
formatter.before({
  "duration": 14259446,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 9373055,
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
  "duration": 22726095,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 959885,
  "status": "passed"
});
formatter.before({
  "duration": 15609335,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 296014,
  "status": "passed"
});
formatter.before({
  "duration": 11394917,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 292233,
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
  "duration": 15244180,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1485471,
  "status": "passed"
});
formatter.before({
  "duration": 21081272,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2105048,
  "status": "passed"
});
formatter.before({
  "duration": 12600580,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 580684,
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
  "duration": 9384399,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 10275142,
  "status": "passed"
});
formatter.before({
  "duration": 13918058,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 295474,
  "status": "passed"
});
formatter.before({
  "duration": 18431191,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 11712538,
  "status": "passed"
});
formatter.before({
  "duration": 15353294,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 287912,
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
  "duration": 9643142,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 22244801,
  "status": "passed"
});
formatter.before({
  "duration": 16514122,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 527207,
  "status": "passed"
});
formatter.before({
  "duration": 10385877,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 294393,
  "status": "passed"
});
formatter.before({
  "duration": 21630626,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 480753,
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
  "duration": 9169411,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 65742109,
  "status": "passed"
});
formatter.before({
  "duration": 10818554,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 41331761,
  "status": "passed"
});
formatter.before({
  "duration": 14645669,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3902739,
  "status": "passed"
});
formatter.before({
  "duration": 20898154,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 387843,
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
  "duration": 13769511,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 275487,
  "status": "passed"
});
formatter.before({
  "duration": 10410725,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 323022,
  "status": "passed"
});
formatter.before({
  "duration": 9438416,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 551516,
  "status": "passed"
});
formatter.before({
  "duration": 10818554,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 925854,
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
  "duration": 10445836,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2430231,
  "status": "passed"
});
formatter.before({
  "duration": 9260159,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1275345,
  "status": "passed"
});
formatter.before({
  "duration": 11529420,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 563398,
  "status": "passed"
});
formatter.before({
  "duration": 11064332,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2833199,
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
  "duration": 9668529,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 833485,
  "status": "passed"
});
formatter.before({
  "duration": 13690646,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 60213454,
  "status": "passed"
});
formatter.before({
  "duration": 16580564,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 15437560,
  "status": "passed"
});
formatter.before({
  "duration": 13855938,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 285750,
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
  "duration": 18576497,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 603912,
  "status": "passed"
});
formatter.before({
  "duration": 8508781,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 449963,
  "status": "passed"
});
formatter.before({
  "duration": 15401909,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2571216,
  "status": "passed"
});
formatter.before({
  "duration": 9507018,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 5008470,
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
  "duration": 94370117,
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
  "duration": 1894382,
  "status": "passed"
});
formatter.before({
  "duration": 31667552,
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
  "duration": 1780946,
  "status": "passed"
});
formatter.before({
  "duration": 13929402,
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
  "duration": 273867,
  "status": "passed"
});
formatter.before({
  "duration": 16674013,
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
  "duration": 2519360,
  "status": "passed"
});
});