UPDATE users 
SET name = $1,
age = $2,
email = $3
WHERE id = $4
RETURNING *;
