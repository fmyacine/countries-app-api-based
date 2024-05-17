import requests
import uuid
import csv

def api_country(country):
    url = f"https://restcountries.com/v3.1/name/{country}"

    try:
        response = requests.get(
            url,
            cookies={"session": str(uuid.uuid4())},
            headers={"Accept": "*/*", "User-Agent": "python-requests"},
        )
        response.raise_for_status()

        result = response.json()
        return result
    except (KeyError, IndexError, ValueError,requests.exceptions.HTTPError):
        return None

def api_region(region):
    url = f"https://restcountries.com/v3.1/region/{region}"

    try:
        response = requests.get(
            url,
            cookies={"session": str(uuid.uuid4())},
            headers={"Accept": "*/*", "User-Agent": "python-requests"},
        )
        response.raise_for_status()

        # Extract advice from response
        result = response.json()
        return result
    except (KeyError, IndexError, ValueError):
        return None

def api_all():
    url = f"https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region"

    try:
        response = requests.get(
            url,
            cookies={"session": str(uuid.uuid4())},
            headers={"Accept": "*/*", "User-Agent": "python-requests"},
        )
        response.raise_for_status()

        # Extract advice from response
        result = response.json()
        return result
    except (KeyError, IndexError, ValueError):
        return None

def api_detail(name):
    url = f"https://restcountries.com/v3.1/name/{name}"

    try:
        response = requests.get(
            url,
            cookies={"session": str(uuid.uuid4())},
            headers={"Accept": "*/*", "User-Agent": "python-requests"},
        )
        response.raise_for_status()

        # Extract advice from response
        result = response.json()
        return result
    except (KeyError, IndexError, ValueError):
        return None


def api_border(name):
    url = f"https://restcountries.com/v3.1/alpha/{name}"

    try:
        response = requests.get(
            url,        
            cookies={"session": str(uuid.uuid4())},
            headers={"Accept": "*/*", "User-Agent": "python-requests"},
        )
        response.raise_for_status()

        # Extract advice from response
        result = response.json()
        return result
    except (KeyError, IndexError, ValueError):
        return None