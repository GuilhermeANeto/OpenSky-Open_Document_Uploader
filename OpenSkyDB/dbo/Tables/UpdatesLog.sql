CREATE TABLE [dbo].UpdatesLog
(
	[IdUpdate] INT NOT NULL PRIMARY KEY IDENTITY, 
    [DocumentId] INT NOT NULL,
    [DateTimeModification] DATETIME NOT NULL, 
    [UploadsNewFile] BIT NULL, 
    [LastVersion] NVARCHAR(30) NULL, 
    [NewVersion] NVARCHAR(30) NULL, 
    [User] INT NULL, 
    CONSTRAINT [FK_UpdatesLog_Document] FOREIGN KEY ([DocumentId]) REFERENCES [Document]([IdDocument]) 
)