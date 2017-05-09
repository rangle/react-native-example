import wd from 'wd';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 300000;
