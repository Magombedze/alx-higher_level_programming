import MySQLdb as db
from sys import argv

if __name__ == "__main__":
    """
    Access to the database and get the cities
    from the database.
    """

    db_con = db.con(host="localhost", port=3306,
                            user=argv[1], passwd=argv[2], db=argv[3])

    with db_con.cursor() as db_cur:
        db_cur.execute("""
            SELECT
                cities.id, cities.name
            FROM
                cities
            JOIN
                states
            ON
                cities.state_id = states.id
            WHERE
                states.name LIKE BINARY %(state_name)s
            ORDER BY
                cities.id ASC
        """, {
            'state_name': argv[4]
        })
        rows = db_cur.fetchall()

    if rows is not None:
        print(", ".join([row[1] for row in rows]))

