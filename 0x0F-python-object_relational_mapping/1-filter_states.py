#!/usr/bin/python3
"""
This script lists all states with
a `name` starting with the letter `N`
in database `hbtn_0e_0_usa`.
"""

import MySQLdb as db
from sys import argv


if __name__ == '__main__':
    db_connect = db.connect(host="localhost", port=3306,
                            user=argv[1], passwd=argv[2], db=argv[3])
    db_cur = db_connect.cursor()

    db_cur.execute(
        "SELECT * FROM states WHERE name LIKE BINARY 'N%' \
                ORDER BY states.id ASC")

    rows = db_cur.fetchall()

    for row in rows:
        print(row)
