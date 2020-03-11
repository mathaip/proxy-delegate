# ProxyDelegate

Following the steps to complete this exercise:

1. clone this project
1. update packages: `npm ci`
1. run the test: `npm test`
1. make sure only 1 test case fails, the one that set version
1. fix the failed test case by modifying the ProxyDelegate.sol contract, e.g. add a version state variable in ProxyDelegate.sol

```
Added a call() method after delegateCall in order to change version state
```

5. add a new Proxy contract which will use .call() instead of .delegatecall()
6. write test cases for the new Proxy contract to test getMsgSender() and setVersion(). Do you notice any differences between .call() and .delegatecall()?

```
Change msg.sender = contract address in testcase.
```

7. commit your changes to github and submit your github url

Student ID: 101201831.
Student Name: Nguyen Anh Tuan Dinh.
