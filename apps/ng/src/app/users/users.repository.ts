import {
  addEntities,
  createState,
  selectAll,
  selectEntity,
  setEntities,
  Store,
  withEntities,
} from '@ngneat/elf';
import {
  selectRequestStatus,
  updateRequestCache,
  withRequestsCache,
  withRequestsStatus,
} from '@ngneat/elf-requests';
import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const enum UsersRequests {
  default = 'users',
}

const { state, config } = createState(
  withEntities<User>(),
  withRequestsStatus(),
  withRequestsCache()
);
const store = new Store({ name: 'users', state, config });

@Injectable({ providedIn: 'root' })
export class UsersRepository {
  users$ = store.pipe(selectAll());
  status$ = store.pipe(selectRequestStatus(UsersRequests.default));

  // ps = persistState(store, { storage: useLocalStorage })

  user$(id: User['id']) {
    return store.pipe(selectEntity(id));
  }

  userStatus$(id: string) {
    return store.pipe(
      selectRequestStatus(id, { groupKey: UsersRequests.default })
    );
  }

  get store() {
    return store;
  }

  setUsers(users: User[]) {
    store.reduce(
      setEntities(users),
      updateRequestCache(UsersRequests.default, 'full')
    );
  }

  addUser(user: User) {
    this.store.reduce(addEntities(user), updateRequestCache(user.id, 'full'));
  }
}
