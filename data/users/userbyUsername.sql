SELECT  TOP (1) 
       [UserId]
      ,[UserName]
      ,[Password]
      ,[FName]
      ,[LName]
      ,[DepartmentDetailId]
  FROM [dbo].[User]	
  WHERE [UserName] = @UserName