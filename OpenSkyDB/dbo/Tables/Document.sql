CREATE TABLE [dbo].[Document] (
    [IdDocument]             INT NOT NULL PRIMARY KEY IDENTITY,
    [Title]          NVARCHAR (200)  NOT NULL,
    [Description]    NVARCHAR (2000) NULL,
    [Version]        NVARCHAR (30)   NULL,
    [FileName]       NVARCHAR (255)  NOT NULL,
    [FilePath]       NVARCHAR (260)  NOT NULL,
    [DateTimeUpload] DATETIME        NOT NULL, 
    [User] INT NULL
);