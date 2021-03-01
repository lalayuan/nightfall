import posidonInterface from '../build/contracts/Poseidon.json';
import posidonV2Interface from '../build/contracts/Poseidon_V2.json';
import posidonT3Interface from '../build/contracts/PoseidonT3.json';
import Web3 from '../src/web3';

let accounts;
let web3;
let newtworkId;

describe('Poseidon Smart contract test', () => {
  beforeAll(async () => {
    await Web3.waitTillConnected();
    web3 = Web3.connection();
    newtworkId = await web3.eth.net.getId();
    accounts = await web3.eth.getAccounts();
  });

  test('Should calculate the poseidon hash correctly t=3 from iden3', async () => {
    const poseidonT3ContractInstance = new web3.eth.Contract(
      posidonT3Interface.abi,
      posidonT3Interface.networks[newtworkId].address,
    );
    const testHash = await poseidonT3ContractInstance.methods
      .poseidon([
        '0x0000000000002710a48eb90d402c7d1fcd8d31e3cc9af568',
        '0x00000000000000000000000000000029',
      ])
      .call();
    const hash = '7310851731891122965306208066033090004239418097517634670336709823680483094248';
    expect(testHash.toString()).toEqual(hash);
  });
  test('Should calculate the poseidon hash correctly t=3 from iden3', async () => {
    // console.log('in test for poseidonT3', posidonT3Interface.networks[newtworkId].address, posidonT3Interface.abi);
    const poseidonT3ContractInstance = new web3.eth.Contract(
      posidonT3Interface.abi,
      posidonT3Interface.networks[newtworkId].address,
    );
    const tx = await poseidonT3ContractInstance.methods
      .poseidon([
        '0x0000000000002710a48eb90d402c7d1fcd8d31e3cc9af568',
        '0x00000000000000000000000000000029',
      ])
      .send({
        from: accounts[0],
        gas: 5900000,
      });
    console.log('PoseidonT3 gasUsed:::', tx);
  });

  test('Should calculate the poseidon hash correctly t=3 from nightlite', async () => {
    const poseidonContractInstance = new web3.eth.Contract(
      posidonInterface.abi,
      posidonInterface.networks[newtworkId].address,
    );
    const testHash = await poseidonContractInstance.methods
      .hash([
        '0x0000000000002710a48eb90d402c7d1fcd8d31e3cc9af568',
        '0x00000000000000000000000000000029',
      ])
      .call();
    const hash = '7310851731891122965306208066033090004239418097517634670336709823680483094248';
    expect(testHash.toString()).toEqual(hash);
  });
  test('Should calculate the poseidon hash correctly t=3 from nightlite', async () => {
    const poseidonContractInstance = new web3.eth.Contract(
      posidonInterface.abi,
      posidonInterface.networks[newtworkId].address,
    );
    const tx = await poseidonContractInstance.methods
      .hash([
        '0x0000000000002710a48eb90d402c7d1fcd8d31e3cc9af568',
        '0x00000000000000000000000000000029',
      ])
      .send({
        from: accounts[0],
        gas: 620000,
      });
    console.log('PoseidonV1 gasUsed:::', tx);
  });

  test('Should calculate the poseidon hash correctly t=3 from nightlite v2', async () => {
    const poseidonV2ContractInstance = new web3.eth.Contract(
      posidonV2Interface.abi,
      posidonV2Interface.networks[newtworkId].address,
    );
    const testHash = await poseidonV2ContractInstance.methods
      .hash([
        '0x0000000000002710a48eb90d402c7d1fcd8d31e3cc9af568',
        '0x00000000000000000000000000000029',
      ])
      .call();
    const hash = '7310851731891122965306208066033090004239418097517634670336709823680483094248';
    expect(testHash.toString()).toEqual(hash);
  });
  test('Should calculate the poseidon hash correctly t=3 from nightlite v2', async () => {
    const poseidonV2ContractInstance = new web3.eth.Contract(
      posidonV2Interface.abi,
      posidonV2Interface.networks[newtworkId].address,
    );
    const tx = await poseidonV2ContractInstance.methods
      .hash([
        '0x0000000000002710a48eb90d402c7d1fcd8d31e3cc9af568',
        '0x00000000000000000000000000000029',
      ])
      .send({
        from: accounts[0],
        gas: 620000,
      });
    console.log('PoseidonV2 gasUsed:::', tx);
  });

  test('Should calculate the poseidon hash correctly t=3 from nightlite', async () => {
    const poseidonContractInstance = new web3.eth.Contract(
      posidonInterface.abi,
      posidonInterface.networks[newtworkId].address,
    );
    const tx = await poseidonContractInstance.methods
      .hash([
        '0x0000000000002710a48eb90d402c7d1fcd8d31e3cc9af568',
        '0x00000000000000000000000000000029',
      ])
      .send({
        from: accounts[0],
        gas: 620000,
      });
    console.log('PoseidonV1 gasUsed:::', tx);
  });
  test('Should calculate the poseidon hash correctly t=3 from nightlite', async () => {
    const poseidonContractInstance = new web3.eth.Contract(
      posidonInterface.abi,
      posidonInterface.networks[newtworkId].address,
    );
    const testHash = await poseidonContractInstance.methods
      .hash([
        '0x0000000000002710a48eb90d402c7d1fcd8d31e3cc9af568',
        '0x00000000000000000000000000000029',
      ])
      .call();
    const hash = '7310851731891122965306208066033090004239418097517634670336709823680483094248';
    expect(testHash.toString()).toEqual(hash);
  });
});
