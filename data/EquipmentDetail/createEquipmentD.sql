INSERT INTO [dbo].[EquipmentDetail](
	[EquipmentDetailId] [int] IDENTITY(1,1) NOT NULL,
	[RegisterDate] [datetime] NULL,
	[EquipmentCode] [varchar](50) NULL,
	[EquipmentDetailName] [varchar](500) NULL,
	[EquipmentNo] [varchar](50) NULL,
	[UnitPrice] [float] NULL,
	[ResourceId] [int] NULL,
	[Yearly] [varchar](4) NULL,
	[DocumentNo] [varchar](50) NULL,
	[DepartmentDetailId] [int] NULL,
	[ChangeList] [varchar](50) NULL,
	[ChangeDocumentNo] [varchar](50) NULL,
	[Remark] [varchar](500) NULL,
	[IsDelete] [bit] NULL,
	[CreateBy] [int] NULL,
	[CreateDate] [datetime] NULL,
	[UpdateBy] [int] NULL,
	[UpdateDate] [datetime] NULL,
	[StatusId] [int] NULL,
	[OsId] [int] NULL,
	[Division] [varchar](100) NULL,
	[ProjectId] [int] NULL,
	[EquipmentTypeId] [int] NULL,
	[CPU] [varchar](50) NULL,
	[RAM] [varchar](50) NULL,
	[CategoryId] [int] NULL,
	[ProcurementId] [int] NULL,
	[PropertyCode] [varchar](50) NULL,
	[UnitCount] [varchar](50) NULL,
	[Amount] [int] NULL,
	[Distribution] [varchar](50) NULL
)
VALUES 
    (
        @RegisterDate,
        @EquipmentCode,
        @EquipmentDetailName,
        @EquipmentNo,
        @UnitPrice,
        @ResourceId,
        @Yearly,
        @DocumentNo,
        @DepartmentDetailId,
        @ChangeList,
        @ChangeDocumentNo,
        @Remark,
        @IsDelete,
        @CreateBy,
        @CreateDate,
        @UpdateBy,
        @UpdateDate,
        @StatusId,
        @OsId,
        @Division,
        @ProjectId,
        @EquipmentTypeId,
        @CPU,
        @RAM,
        @CategoryId,
        @ProcurementId,
        @PropertyCode,
        @UnitCount,
        @Amount,
        @Distribution
    )

SELECT SCOPE_IDENTITY() AS EquipmentDetailId