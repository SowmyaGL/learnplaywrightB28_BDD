Feature: verify Add Employee functionality
Feature Description

  Scenario: Verify Add Employee with Manditory details
    Given user launch the Application
    When User enter username as "Admin" and password as "admin123"
    And user click on login button
    Then user should be navigated to dashbaord page
    When user clicks on PIM
    And user clicks on Add Employee submenu
    And user enter firstname as "Raju"
    And user enter lastname as "G"
    And user clicks on save Button
    Then user should get success Message
   