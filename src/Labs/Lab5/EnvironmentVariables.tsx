const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER; // access the environment variable from the env property of the process object
export default function EnvironmentVariables() {
  return (
    <div id="wd-environment-variables">
      <h3>Environment Variables</h3>
      <p>Remote Server: {REMOTE_SERVER}</p><hr/>
    </div>
  );
}
