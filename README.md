start
This is obviously how the application should run.

test
If this exits with a 0, then tests are good (including code coverage)!

build
Used for a CICD set to transpile the TS to JS.
This is configured by the tsconfig.json file

test:watch
I usually keep 3 console windows open when developing, this is one of them.
This automatically runs all tests on ever file save.

build:watch
This is my second dev-time console window.
Best having tsc running after every save as well.

view:coverage
view how often each line of code is being called while testing.

clean
This is used for dev-time. When you feel things are out-of-whack, you can run clean to delete all the temporary files generated by other scripts.
