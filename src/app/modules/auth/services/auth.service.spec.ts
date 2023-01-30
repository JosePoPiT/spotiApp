import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AuthService } from './auth.service';
import * as mockRaw from './../../../data/user.json'
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy : {post: jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO Prueba de send credentials
  it('Debe de retornar un objeto con "data" y "tokenSession"', (done: DoneFn) => {
    //TODO Arrange
    const user: any = mockUser.userOk
    const mockResponse = {
       data: {},
       tokenSession: 'xsxsxsxs'
    }

    httpClientSpy.post.and.returnValue(
      of(mockResponse)
    ) //TODO Debe de retornar un valor en este caso es un Observable

    //TODO Act
    service.sendCredentials(user.email, user.password)
      .subscribe(respApi => {
        const getPorperties = Object.keys(respApi)
        expect(getPorperties).toContain('data')
        expect(getPorperties).toContain('tokenSession')
        done()
        console.log(respApi);
        
      })
  })
});
