import { OkPacket } from "mysql2"

import { connection } from "./db"

export class UserRepository {
  readAll(): Promise<IUser[]> {
    return new Promise((resolve, reject) => {
      connection.query<IUser[]>("SELECT * FROM users", (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  }

  readById(user_id: number): Promise<IUser | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<IUser[]>(
        "SELECT * FROM users WHERE id = ?",
        [user_id],
        (err, res) => {
          if (err) reject(err)
          else resolve(res?.[0])
        }
      )
    })
  }

  create(user: IUser): Promise<IUser> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "INSERT INTO users (email, password, admin) VALUES(?,?,?)",
        [user.email, user.password, user.admin],
        (err, res) => {
          if (err) reject(err)
          else
            this.readById(res.insertId)
              .then(user => resolve(user!))
              .catch(reject)
        }
      )
    })
  }

  update(user: IUser): Promise<IUser | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "UPDATE users SET email = ?, password = ?, admin = ? WHERE id = ?",
        [user.email, user.password, user.admin, user.id],
        (err, res) => {
          if (err) reject(err)
          else
            this.readById(user.id!)
              .then(resolve)
              .catch(reject)
        }
      )
    })
  }

  remove(user_id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query<OkPacket>(
        "DELETE FROM users WHERE id = ?",
        [user_id],
        (err, res) => {
          if (err) reject(err)
          else resolve(res.affectedRows)
        }
      )
    })
  }
}