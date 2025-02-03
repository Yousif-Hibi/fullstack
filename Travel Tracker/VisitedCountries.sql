CREATE TABLE visited_contries(
	id SERIAL PRIMARY KEY,
	country_code CHAR(2) NOT NULL UNIQUE
)