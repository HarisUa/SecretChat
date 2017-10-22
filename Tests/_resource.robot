*** Settings ***
Library  Selenium2Library

*** Variables ***
${BROWSER}          Chrome
${HOST}             http://secretchat.eu-4.evennode.com/

*** Keywords ***
Prepare Test Environment
    Open Browser  ${HOST}  ${BROWSER}
    Maximize Browser Window