import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';

import { environment } from '../environments/environment';
const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadTheme(id: string) {
    return this.http.get<ITheme>(`${API_URL}/themes/${id}`, { withCredentials: true });
  }

  loadThemes() {
    return this.http.get<ITheme[]>(`${API_URL}/themes`, { withCredentials: true });
  }

  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : ''
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`, { withCredentials: true });
  }

  saveTheme(data: any) {
    return this.http.post<ITheme>(`${API_URL}/themes`, data, { withCredentials: true });
  }
}
