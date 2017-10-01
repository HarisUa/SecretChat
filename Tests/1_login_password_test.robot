*** Settings ***
Documentation  Checking the secret-chat: http://secretchat.eu-4.evennode.com/
Resource  _resource.robot
Test Setup  Prepare Test Environment
Test Teardown  Close All Browsers

*** Variables ***
${MAIL}  ruslan.immunity@gmail.com
*** Test Cases ***
User must sign in to check out
    [Documentation]  Checking the chat and download some items.
    [Tags]  Smoke
    Wait Until Page Contains Element  css=.answer-add
    Wait Until Page Contains  Lobbys
    Click Element   css=.content.container-fluid.bootstrap.snippets > div > div.col-sm-8.col-xs-12 > div.answer-add > span
    Click Image     https://bootdey.com/img/Content/avatar/avatar1.png
    Element Should Be Visible  css=.avatar
    Wait Until Page Contains  currently in chat:
