module.exports = IsAlive;

function IsAlive(ping){
    var pingOneSuccess = ping();
    var pingTwoSuccess = ping();
    var pingTreeSuccess = ping();

    if (pingOneSuccess && pingTwoSuccess && pingTreeSuccess)
        return true;

    return false;
}