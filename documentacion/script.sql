CREATE DATABASE GestionTareas;
CREATE TABLE public.status (
	idstatus serial4 NOT NULL,
	"name" varchar(100) NULL,
	description varchar(100) NULL,
	CONSTRAINT status_pkey PRIMARY KEY (idstatus)
);
CREATE TABLE public.priority (
	idpriority serial4 NOT NULL,
	"name" varchar(100) NULL,
	description varchar(100) NULL,
	CONSTRAINT priority_pkey PRIMARY KEY (idpriority)
);
CREATE TABLE public.task (
	idtask serial4 NOT NULL,
	description varchar(100) NULL,
	begindate date NULL,
	enddate date NULL,
	duration varchar NULL,
	idpadre int4 NULL,
	idpriority int4 NULL,
	idstatus int4 NULL,
	estado int4 NULL,
	CONSTRAINT task_pkey PRIMARY KEY (idtask),
	CONSTRAINT task_idpriority_fkey FOREIGN KEY (idpriority) REFERENCES public.priority(idpriority) ON DELETE RESTRICT,
	CONSTRAINT task_idstatus_fkey FOREIGN KEY (idstatus) REFERENCES public.status(idstatus) ON DELETE RESTRICT
);