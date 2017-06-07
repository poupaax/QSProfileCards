Feature: User views the main informations about all members of the team (pedro, vítor and miriam)
As an user
I want to see a list of the team members (pedro, vítor and miriam)
So that I can know the team better and see the main information

Scenario Outline: There are no members to show
Given that I'm in the main page
And doesn't exists "<members>"
When the page is loaded
Then the application shows a default message "<msg>" to member "<members>"

  Examples:
    |members        |msg                           |
    |Miriam Pereira |There are no members to show. |
    |Vítor Dias   	|There are no members to show. |
    |Pedro Jorge	|There are no members to show. |

Scenario Outline: A member has a name
Given that I'm in the main page
And exists "<members>"
When the page is loaded
Then the application shows member "<members>" name "<name>"

Examples:
|members        | name			    |
|Miriam Pereira | Miriam Pereira	|
|Vítor Dias	    | Vítor Dias		|
|Pedro Jorge 	| Pedro Jorge		|

Scenario Outline: A member don't have name
Given that I'm in the main page
And exists "<membersId>"
When the page is loaded
Then the application show "<default name>" to the "<membersId>"

Examples:
|membersId        | default name	|
|speakerMiriam    | User		    |
|speakerVitor     | User		    |
|speakerPedro     | User		    |

Scenario Outline: An member have photo
Given that I'm in the main page
And exists "<members>"
When the page is loaded
Then the application show "<members>" photo "<photo>"

Examples:
|members        | photo		     |
|Miriam Pereira | img/miriam.jpg |
|Vítor Dias	    | img/vitor.jpg |
|Pedro Jorge 	| img/pedro.jpg |

Scenario Outline: An member don't have photo
Given that I'm in the main page
And exists "<members>"
When the page is loaded
Then the application show a "<members>" default photo "<default photo>"

Examples:
|members        | default photo  |
|Miriam Pereira | img/default.jpg	 |
|Vítor Dias	    | img/default.jpg	 |
|Pedro Jorge 	| img/default.jpg	 |

Scenario Outline: An member have short bio
Given that I'm in the main page
And exists "<members>"
When the page is loaded
Then the application show member "<members>" short bio "<short bio>"

Examples:
|members        | short bio                         			       |
|Miriam Pereira | 21 years old. Master's student. Front end developer. |
|Vítor Dias	    | 22 years old. Master's student. Front end developer. |
|Pedro Jorge 	| 23 years old. Master's student.				       |

Scenario Outline: An member don't have short bio
Given that I'm in the main page
And exists "<members>"
When the page is loaded
Then the application show "<members>" short bio "<shortBioMsg>"

Examples:
|members        | shortBioMsg                      |
|Miriam Pereira | The user don't have information. |
|Vítor Dias	    | The user don't have information. |
|Pedro Jorge 	| The user don't have information. |

Scenario Outline: An member have facebook link
Given that I'm in the main page
And exists "<members>"
When the page is loaded
Then the application show facebook icon with member "<members>" link "<facebook link>"

Examples:
|members        | facebook link           			        |
|Miriam Pereira | https://www.facebook.com/miriampereira95	|
|Vítor Dias	    | https://www.facebook.com/vitor.dias.3954	|
|Pedro Jorge 	| https://www.facebook.com/pedrombjorge		|

Scenario Outline: An member don't have facebook link
Given that I'm in the main page
And exists "<members>"
When the page is loaded
Then the application show the member "<members>" default link "<facebook link default>"

  Examples:
    |members        | facebook link default     |
    |Miriam Pereira | https://www.facebook.com/	|
    |Vítor Dias	    | https://www.facebook.com/	|
    |Pedro Jorge 	| https://www.facebook.com/	|

Scenario Outline: An member have linkedin link
Given that I'm in the main page
And exists "<members>"
When the page is loaded
Then the application show linkedin icon with member "<members>" link "<linkedin link>"

Examples:
|members        | linkedin link           				            |
|Miriam Pereira | https://www.linkedin.com/in/miriammpereira/		|
|Vítor Dias	    | https://www.linkedin.com/in/vitor-dias-6aa9a310b/	|
|Pedro Jorge 	| https://www.linkedin.com/in/pedrombjorge/		    |

Scenario Outline: An member don't have linkedin link
Given that I'm in the main page
And exists "<members>"
When the page is loaded
Then the application show the member "<members>" link "<linkedin link default>"

  Examples:
    |members        | linkedin link default     |
    |Miriam Pereira | https://www.linkedin.com/ |
    |Vítor Dias	    | https://www.linkedin.com/	|
    |Pedro Jorge 	| https://www.linkedin.com/ |