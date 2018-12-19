import React from 'react'

import Layout from '../components/Layout'
import Modal from '../components/Modal';

const IndexPage = () => (
  <Layout>
    <div className="columns section">
      <div className="column box is-3">
       ncz n
      </div>
      <Modal buttonText='submit'>
        <div className="box">
          <h1 className="is-size-5 has-text-weight-bold has-text-centered">New User</h1>
          <hr />
          <div className="field">
            <label className="label">fullname</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div className="field">
            <label className="label">username</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  </Layout>
)

export default IndexPage
