import click
import flask
import pymysql
from flask_cors import CORS
app = flask.Flask(__name__)
CORS(app)
db = pymysql.connect(
    user="root",
    password="password",
    # password="testpass",
    host="localhost",
    # host="db",
    database="challenge",
)


@app.route("/test")
def test():
    with db.cursor() as cur:
        cur.execute("SELECT col FROM test;")
        (result,) = cur.fetchone()
        return flask.jsonify(dict(result=result, backend="python"))

@app.route("/movies")
def movieData():
    with db.cursor(pymysql.cursors.DictCursor) as cur:
        cur.execute("select m.movieId, m.title, m.genres, t.userId, t.tag, t.timestamp, l.imdbId, l.tmdbId from movies m, tags t, links l where m.movieId = l.movieId and l.movieId = t.movieId limit 100;")
        result = cur.fetchall()
        print(result)
        return flask.jsonify(dict(result=result, backend="python"))

@app.cli.command("load-movielens")
def load_movielens():
    with db.cursor() as cur:
        cur.execute("SELECT col FROM test;")
        (result,) = cur.fetchone()
        click.echo(f"result {result}")

if __name__ == "__main__":
    app.run(host="0.0.0.0",port="80",debug=True)