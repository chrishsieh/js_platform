REM SYSINFOGET(X), SYSINFOSET(X, Y) the const X
CONST rlStatus = 0
CONST rlError = 1
CONST wlGPIO = 2
CONST wlPntAct = 3
CONST rlRemainCnt = 4
CONST wlbInputNoDataTimeOut = 5
CONST wlInputNoLineEndTimeOut = 6
CONST wlScannerRS232Con = 7
CONST wlScannerUSBCon = 8
CONST wlUserModeVar = 9
CONST rlCalLength = 10
CONST wlInputECHO = 11
CONST rlPntDistance = 12
CONST rlPntKeyPress = 13
CONST rlPntTplID = 14
CONST rlFrmStart = 15
CONST rlFrmCounter = 16

REM SYSINFOGET$(X), SYSINFOSET$(X, Y$) the const X
CONST rsSysInfo = 0
CONST rsPntSN = 1

REM SYSINFOSET(wlPntAct, Y) the action Y
CONST wlDoFeed = 0
CONST wlDoPause = 1
CONST wlDoReprint = 2
CONST wlDoCut = 3
CONST wlDoCalibration = 4
CONST wlDoTPHchk = 5

REM SYSINFOGET(rlPntKeyPress) the Key mapping
CONST rlFEEDKey = 2
CONST rlPAUSEKey = 4
CONST rlCANCELKey = 8
