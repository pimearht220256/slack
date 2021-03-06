/**
 * Track GitHub App installations
 *
 *
 */
module.exports = (robot) => {
  const { Installation } = robot.models;

  robot.on('installation.created', async (context) => {
    await Installation.install(context.payload.installation);
    context.log({ installation: context.payload.installation }, 'GitHub App installed');
  });

  robot.on('installation.deleted', async (context) => {
    await Installation.uninstall(context.payload.installation);
    context.log({ installation: context.payload.installation }, 'GitHub App uninstalled');
  });
};
