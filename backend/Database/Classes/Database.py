import psycopg2
import psycopg2.extras
from .ConfigManager import ConfigManager


class Singleton(object):
    _instance = None

    def __new__(class_, *args, **kwargs):
        if not isinstance(class_._instance, class_):
            class_._instance = object.__new__(class_, *args, **kwargs)
        return class_._instance


class Database(Singleton):
    def __init__(self):
        config = ConfigManager._instance
        self.conn = psycopg2.connect(
            host=config.get("database_host"),
            database=config.get("database_name"),
            user=config.get("database_user"),
            password=config.get("password")
        )

    def execute_select(self, query, data=None):
        cursor = self.conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
        cursor.execute(query, data)
        records = cursor.fetchall()
        cursor.close()
        return records

    def execute_change(self, query, data=None):
        cursor = self.conn.cursor()
        cursor.execute(query, data)
        self.conn.commit()
        cursor.close()


if __name__ == "__main__":
    ConfigManager(path=r"dev.config")
    db = Database()
    print(db.execute_select("SELECT * FROM users"))
