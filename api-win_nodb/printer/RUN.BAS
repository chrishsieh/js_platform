REM Do copy file to FLASH, then write RUN.BAS in FLASH.

PRINT "Copy start"
REM "PROFILE.BAS" is the default const variable
N = KILL("/FS/EXEC/RUN.BAS")
CPF "PROFILE.BAS" FROM HOST TO FLASH
CPF "RUN_QR.BAS" FROM HOST TO FLASH
CPF "0.TPL" FROM HOST TO FLASH

NAME "/FS/EXEC/RUN_QR.BAS" AS "/FS/EXEC/RUN.BAS"

PRINT "Copy finished."

REM SET SECURE to printer
SECURE "Demo" USER "APIadmin" PASSWORD "Changeme"

RUN "/FS/EXEC/RUN.BAS"
END
