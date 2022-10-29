INSERT INTO [dbo].[User]
    (
      [UserName]
      ,[Password]
      ,[FName]
      ,[LName]
      ,[DepartmentDetailId]
    )
VALUES 
    (
        @UserName,
        @Password,
        @FName,
        @LName,
        @DepartmentDetailId
    )

SELECT SCOPE_IDENTITY() AS UserId