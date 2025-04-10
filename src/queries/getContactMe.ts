// queries/getContactMe.ts
import datoCMSClient from './datoCMSClient';
import { ContactMe } from '../types';

const GET_CONTACT_ME = `
  {
    contact {
        email
        id
        linkedinlink
        mobile
        name
        summary
        title
        profilepicture {
            url
      }
    }
  }

`;

export async function getContactMe(): Promise<ContactMe> {
  const data = await datoCMSClient.request<{ contact: ContactMe }>(GET_CONTACT_ME);

  return data.contact;
}
