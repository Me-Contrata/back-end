# Back-end Me-Contrata

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Using Guards

If you want to implement guards in your route, you must include the Decorator _@UseGuards(AuthGuard)_ in the class. If you want to match a role with a method, you must implement the decorator _@Roles(Role.Explorador)_ above the method. 

Example:

```javascript
@UseGuards(AuthGuard)
@Controller('v1')
export class ExploradorController {
    @Roles(Role.Explorador)
    @Get('/')
    listProjects() {
        ...
    }
}

```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Me-Contrata is [MIT licensed](LICENSE).
