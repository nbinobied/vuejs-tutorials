drop table if exists projects;

drop type if exists project_status CASCADE;
create type project_status as enum (
    'in-progress',
    'completed'
);

create table projects (
    id bigint primary key generated always as identity not null,
    name text not null,
    slug text unique not null,
    status project_status not null default 'in-progress',
    created_at timestamptz default now() not null,
    collaborators text array default array[]::varchar[] not null,
    description text default '' not null
);