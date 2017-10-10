*** Settings ***
Library  Selenium2Library

*** Variables ***
${BROWSER}          Chrome
${HOST}             http://localhost:8080/

*** Keywords ***
Prepare Test Environment
    Open Browser  ${HOST}  ${BROWSER}
    Maximize Browser Window