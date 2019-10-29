
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntities } from '../../../../src/shared/entity';
import { SharedModule } from '../../../../src/shared/shared.module';
import { ListOptionQuery } from '../DemoGraphStats';

describe('ListOptionQuery', () => {
  let ListService: ListOptionQuery;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [SharedModule, TypeOrmModule.forFeature([...userEntities])],
      providers: [ListOptionQuery],
    }).compile();

    ListService = module.get<ListOptionQuery>(ListOptionQuery);
  });


  describe('getDashboardItemValue', () => {
    it('should return an array of list option', async () => {
      expect(await ListService.getDashboardItemValue()).toStrictEqual(
        {
          "GroListGroupup": [
            { ID: 0, Name: null, Gender: 0, Count: '2' },
            { ID: 0, Name: null, Gender: 1, Count: '9' },
            { ID: 0, Name: null, Gender: 2, Count: '4' },
            { ID: 1, Name: 'Head of Household', Gender: 1, Count: '14' },
            { ID: 1, Name: 'Head of Household', Gender: 2, Count: '7' },
            { ID: 2, Name: 'Spouse', Gender: 1, Count: '6' },
            { ID: 2, Name: 'Spouse', Gender: 2, Count: '9' },
            { ID: 3, Name: 'Child', Gender: 1, Count: '23' },
            { ID: 3, Name: 'Child', Gender: 2, Count: '19' },
            { ID: 4, Name: 'Other Relative', Gender: 1, Count: '4' },
            { ID: 4, Name: 'Other Relative', Gender: 2, Count: '2' },
            { ID: 5, Name: 'Non Relative', Gender: 2, Count: '1' }
          ]
        });
    });
  });
});